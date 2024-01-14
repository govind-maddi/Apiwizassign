import React, { createContext, useEffect, useState } from 'react'

import '../styles/themewrapper.css';

export const Theme = createContext();
export const SetTheme = createContext();

const lighttheme = {
    primary:'radial-gradient(100% 100% at 49.12% 0%, #FFFFFF 0%, #EFF6FF 100%)',
    fontprimarycolor:'black',
    fontsecondarycolor:'rgba(71, 84, 103, 1)',
    inputoutputborder:'rgba(210, 214, 219, 1)',
    bordertable:'rgba(234, 236, 240, 1)',
}
const darktheme = {
    primary:'#0e0d0d',
    fontprimarycolor:'white',
    fontsecondarycolor:'#ede5e5',
    inputoutputborder:'#2e2727',
    bordertable:'#2e2727'
}

function Themewrapper( { children } ) {

  const [ theme,setTheme ] = useState(lighttheme);
  const [ menu,setMenu ] = useState(false);

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const toggleThemeMenu = () => {
    setMenu(prevMenu => !prevMenu);
  }

  useEffect(() => {
    if(selectedOption === 'option1')
    {
        setTheme(lighttheme);
    }
    else if( selectedOption === 'option2' )
    {
        setTheme(darktheme);
    }
  },[ selectedOption ])

  return (
    <>
    <Theme.Provider value={theme}>
        <SetTheme.Provider value={setTheme}>
            <header className='themebtn' onClick={toggleThemeMenu}>Theme</header>
            {
             menu &&   
            <div className='theme_cont'>
                <section>
                    <input type="radio" id='light' value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
                    <label htmlFor="light">Light</label>
                </section>

                <section>
                    <input type="radio" id='dark' value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange}/>
                    <label htmlFor="dark">Dark</label>
                </section>
            </div>
            }
            { children }
        </SetTheme.Provider>
    </Theme.Provider>
    </>
  )
}

export default Themewrapper