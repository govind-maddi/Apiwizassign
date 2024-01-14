import React, { useContext, useEffect, useRef, useState } from 'react'
import { SetNotifyMsg } from './Notify';
import { Theme } from './Themewrapper';

function Inputcont( { changeToggle, inputtoggle, handleglobalwordprop, handleglobalparaprop, changeLoaderFlag} ) {

  const [ word,setWord ] = useState('');
  const [ para,setPara ] = useState('');

  const prevword = useRef('');

  const theme = useContext(Theme);

  const [ tempword,setTempWord ] = useState('');

  const [ wordprop,setWordProp ] = useState([{
    wordchars:0,
    words:0,},
    {} ]);
  
  const [ paraprop,setParaProp ] = useState({
    charactercount:0,
    wordcount:0,
    sentencecount:0,
    paragraphcount:0,
    spacecount:0,
    punctuationcount:0,
  });

  const setNotifyMsg = useContext(SetNotifyMsg);

  const handleParaChange = (e) => {
    changeLoaderFlag(true);
    setPara(e.target.value);
  }
  
  const handleWordChange = (e) => {
    setTempWord(e.target.value);
  }

  const processWord = () => {
    if(tempword.trim() !== '' && tempword !== prevword.current){
      changeLoaderFlag(true);
      prevword.current = tempword;
      setWord(tempword);
    }
    else if(tempword.trim() === '')
      setNotifyMsg(["Enter Word to search","error"]);
    else
    {
      setNotifyMsg(["Same word, search unchanged. Try another?","error"]);
    }
  }

  const processPara = (para) => {

    try{

    const tempcharcount = para.split('').length;
    const tempspacecount = para.split(' ').length - 1;
    const temppunctuationcount = para.split(/[_.:});,!?"'{(-]/).length - 1;

    const chararr = [...para.trim().split('')];

    let tempwordcount = 1;
    let tempsentencecount = 1;
    let tempparacount = 1;

    chararr.forEach((char,index) => {
      
      const regexWord = /[\[\] \-_/.,!?:;{}$%#@()=\n]+/;
      const regexsentence = /[!.?\n]/;
      const regexpara = /[\n]/;

      if( regexWord.test(char) )
      {
        if( chararr[index+1] !== undefined && !regexWord.test(chararr[index+1]) ) 
        {
          tempwordcount+=1;
        }
      }

      if( regexsentence.test(char) )
      {
        if( chararr[index+1] !== undefined && !regexsentence.test(chararr[index+1]) )
        {
          tempsentencecount+=1;
        }
      }

      if( regexpara.test(char) )
      {
        if( chararr[index+1] !== undefined && !regexpara.test(chararr[index+1]) )
        {
          tempparacount+=1;
        }
      }

    });

    setParaProp({
      'charactercount':tempcharcount,
      'wordcount':tempwordcount,
      'sentencecount':tempsentencecount,
      'paragraphcount':tempparacount,
      'spacecount':tempspacecount,
      'punctuationcount':temppunctuationcount,
    });
  }
  catch(err)
  {
    setNotifyMsg(["Processing of para failed","error"])
    console.log(err.msg);
  }

  }

  const fetchWordData = async (word) => {
      
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4f94754804mshf693c73cea13dcfp125c78jsn9eacb3d2485b',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    try {
      const response = await fetch(url, options);
      console.log(response.status);
      if(response.status === 404)
      {
        setNotifyMsg(["Word not found. Enter another word","error"]);
        
        handleglobalwordprop([{
          wordchars:0,
          words:0,},
          {} ]);

        throw new Error("Word not found. Enter another word")
      }
      else if(response.status === 500)
      {
        setNotifyMsg(["Internal Server Error.Try again","error"]);

        handleglobalwordprop([{
          wordchars:0,
          words:0,},
          {} ])

        throw new Error("Internal Server Error.Try again")
      }
      else if(response.status === 400)
      {
        setNotifyMsg(["Bad Request.Check Your Connection.","error"]);

        handleglobalwordprop([{
          wordchars:0,
          words:0,},
          {} ])
          
        throw new Error("Bad Request.Check Your Connection.")
      }
      else if(response.status >= 200 && response.status <= 299)
      {
        const data = await response.json();

        const wordchars = word.split('').length;
        const words = word.trim().split(' ').length;

        setWordProp([{wordchars:wordchars,words:words},data.results[0]]);
      }
      else{
        setNotifyMsg(["Something Went Wrong.Try again","error"]);
        throw new Error("Something Went Wrong.Try again.")
      }
    } 
    catch (error) {
      changeLoaderFlag(false);
      console.log(error.msg);
    }
  }

  useEffect(() => {
    handleglobalwordprop(wordprop);
  },[ wordprop ])
  
  useEffect(() => {
    if(word !== '')
      fetchWordData(word);
    else
      setWordProp([{ wordchars:0,words:0 },{}]);
  },[ word ])

  useEffect(() => {
      handleglobalparaprop(paraprop);
  },[ paraprop ]);

  useEffect(() => {
    if(para !== '')
      processPara(para)
    else
    {
      setParaProp({
        'charactercount':0,
        'wordcount':0,
        'sentencecount':0,
        'paragraphcount':0,
        'spacecount':0,
        'punctuationcount':0,
      });
    }
  },[ para ])


  return (
    <div className='inputcont'>

        <section className='input_btns'>
            <button 
              className={ inputtoggle ? 'input_btn_deactive' : 'input_btn_active' } 
              onClick={() => changeToggle(false)}>
              Word Input
            </button>

            <button 
              className={ inputtoggle ? 'input_btn_active' : 'input_btn_deactive' } 
              onClick={() => changeToggle(true)}>
              Paragraph
            </button>
        </section>

        { 

        inputtoggle ? 
        <section className='para_input'>
          <textarea placeholder='Type, or copy/paste your content here.' onChange={handleParaChange}/>
        </section>
          :
          <section className='word_input'>
            <input type="text" placeholder='Enter word here' onChange={handleWordChange}/>
            <button onClick={() => processWord()}>Process Word</button>
        </section>
        
        }

    </div>
  )
}

export default Inputcont