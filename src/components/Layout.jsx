import React, { useContext, useState } from 'react'

import Notify from './Notify'
import HeaderContent from './HeaderContent';
import InputOutputContainer from './InputOutputContainer';

import { Theme } from './Themewrapper';

import '../styles/layout.css';

function Layout() {

  const theme = useContext(Theme);
  console.log(theme.primary);
  return (
    <div id='Parent_container' style={{background:theme.primary}}>
        <Notify>
        <div>
             <HeaderContent/>
             <InputOutputContainer/>
          
        </div>
        </Notify>
    </div>
  )

}

export default Layout