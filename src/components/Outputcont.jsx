import React, { useContext } from 'react'
import { Theme } from './Themewrapper'

function Outputcont( { inputtoggle,globalwordprop,globalparaprop,loaderflag } ) {

    const theme = useContext(Theme);

  return (
    <div className='outputcont'>
        
        {

        inputtoggle ?    

        <section className='paragraph_output_cont'>
        <table className='paragraph_properties_table' id='pc_table_para'>
            <tr>
                <td className='paragraph_properties_header'>Characters</td>
                <td className='paragraph_properties_header'>Words</td>
                <td className='paragraph_properties_header'>Sentences</td>
                <td className='paragraph_properties_header'>Paragraphs</td>
                <td className='paragraph_properties_header'>Spaces</td>
                <td className='paragraph_properties_header'>Punctuations</td>
            </tr>
            <tr>
                <td>{
                        loaderflag ? <span class="loader"></span> : globalparaprop.charactercount
                    }
                    </td>
                <td>{
                        loaderflag ? <span class="loader"></span> : globalparaprop.wordcount
                    }
                    </td>
                <td>{
                        loaderflag ? <span class="loader"></span> : globalparaprop.sentencecount
                    }
                    </td>
                <td>{
                        loaderflag ? <span class="loader"></span> : globalparaprop.paragraphcount
                    }
                    </td>
                <td>{
                        loaderflag ? <span class="loader"></span> : globalparaprop.spacecount
                    }
                    </td>
                <td>{
                        loaderflag ? <span class="loader"></span> : globalparaprop.punctuationcount
                    }
                    </td>
            </tr>
        </table>

        <table className='paragraph_properties_table' id='mob_table_para'>
            <tr>
                <td className='paragraph_properties_header' >Characters</td>
                <td>
                    {
                        loaderflag ? <span class="loader"></span> : globalparaprop.charactercount
                    }
                </td>
            </tr>
            <tr>
                <td className='paragraph_properties_header' >Words</td>
                <td>
                    {
                        loaderflag ? <span class="loader"></span> : globalparaprop.wordcount
                    }
                </td>
            </tr>
            <tr>
                <td className='paragraph_properties_header' >Sentences</td>
                <td>
                    {
                        loaderflag ? <span class="loader"></span> : globalparaprop.sentencecount
                    }
                </td>
            </tr>
            <tr>
                <td className='paragraph_properties_header' >Paragraphs</td>
                <td>
                    {
                        loaderflag ? <span class="loader"></span> : globalparaprop.paragraphcount
                    }
                </td>
            </tr>
            <tr>
                <td className='paragraph_properties_header' >Spaces</td>
                <td>
                    {
                        loaderflag ? <span class="loader"></span> : globalparaprop.spacecount
                    }
                </td>
            </tr>
            <tr>
                <td className='paragraph_properties_header' >Punctuation</td>
                <td>
                    {
                        loaderflag ? <span class="loader"></span> : globalparaprop.punctuationcount
                    }
                </td>
            </tr>
        </table>
        </section>
        :
        <section className='word_output_cont'>
            
            <table className='word_count_table'>
                <tr>
                    <td className='word_table_header'>Characters</td>
                    <td className='word_table_header'>Words</td>
                </tr>
                <tr>
                    <td>{
                            loaderflag ? <span class="loader"></span> : globalwordprop[0].wordchars
                        }
                        </td>
                    <td>
                        {
                            loaderflag ? <span class="loader"></span> : globalwordprop[0].words
                        }
                        </td>
                </tr>
            </table>

            <section style={{position:'relative'}}>
            {
                loaderflag && 
                <div id='property_loader'>
                    <header>
                        Processing Word<span class="loader1"></span>
                    </header>
                </div>
            }
            <table className='word_properties_table' style={{color:theme.fontprimarycolor}}>
                    <tr>
                        <td className='word_properties_header' style={{color:theme.fontsecondarycolor}} >Defination:</td>
                        <td>{
                                globalwordprop[1].definition ?  globalwordprop[1].definition : "."
                            }</td>
                    </tr>
                    <tr>
                        <td className='word_properties_header' style={{color:theme.fontsecondarycolor}} >Part of Speech:</td>
                        <td>
                            {
                                globalwordprop[1].partOfSpeech ? globalwordprop[1].partOfSpeech : "."
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='word_properties_header' style={{color:theme.fontsecondarycolor}} >Synonyms:</td>
                        <td>
                            {
                                (globalwordprop[1].synonyms && globalwordprop[1].synonyms.length > 0) ? 
                                globalwordprop[1].synonyms.map((item) => `${item}, `) : 
                                "."
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='word_properties_header' style={{color:theme.fontsecondarycolor}} >Antonyms:</td>
                        <td>
                            {
                                (globalwordprop[1].antonyms && globalwordprop[1].antonyms.length > 0) ? 
                                globalwordprop[1].antonyms.map((item) => `${item}, `) : 
                                "."
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='word_properties_header' style={{color:theme.fontsecondarycolor}} >Examples:</td>
                        <td>
                            {
                                (globalwordprop[1].examples && globalwordprop[1].examples.length > 0) ? 
                                globalwordprop[1].examples.map((item) => `${item}, `) : 
                                "."
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='word_properties_header' style={{color:theme.fontsecondarycolor}} >Types:</td>
                        <td>
                            {
                                (globalwordprop[1].types && globalwordprop[1].types.length > 0) ? 
                                globalwordprop[1].types.map((item) => `${item}, `) : 
                                "."
                            }
                        </td>
                    </tr>
            </table>
            </section>
        
        </section>

        }

    </div>
  )
}

export default Outputcont