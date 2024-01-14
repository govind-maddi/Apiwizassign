import React, { useContext, useEffect, useState } from 'react'

import Inputcont from './Inputcont';
import Outputcont from './Outputcont';
import { SetNotifyMsg } from './Notify';

function InputOutputContainer() {

  const [ inputtoggle,setInputToggle ] = useState(false);

  const [ globalwordprop,setGlobalWordProp ] = useState([{},{}]);
  const [ globalparaprop,setGlobalParaProp ] = useState({});

  const [ loaderflag,setLoaderFlag ] = useState(false);

  const setNotifyMsg = useContext(SetNotifyMsg); 

  const handleglobalwordprop = (wordarr) => {
    setGlobalWordProp(wordarr);
  }

  const handleglobalparaprop = (paraobj) => {
    setGlobalParaProp(paraobj);
  }

  const changeToggle = (bool_value) => {
    setInputToggle(bool_value);
  }

  const changeLoaderFlag = (bool_value) => {
    setLoaderFlag(bool_value);
  }

  useEffect(() => {
    setTimeout(() => setLoaderFlag(false),500);
  },[ globalparaprop ])

  useEffect(() => {
    setTimeout(() => setLoaderFlag(false),500);
  },[ globalwordprop ])

  useEffect(() => {
    setNotifyMsg(["Welcome to Text Analyzer","success"]);
  },[])

  return (
    <>
      <Inputcont 
        changeToggle={changeToggle} 
        inputtoggle={inputtoggle} 
        handleglobalwordprop={handleglobalwordprop} 
        handleglobalparaprop={handleglobalparaprop}
        changeLoaderFlag={changeLoaderFlag}
        />

        
      <Outputcont 
        inputtoggle={inputtoggle} 
        globalwordprop={globalwordprop} 
        globalparaprop={globalparaprop} 
        loaderflag={loaderflag}
        />
    </>
  )
}

export default InputOutputContainer;