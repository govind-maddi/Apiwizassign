import React, { useContext } from 'react'

import '../styles/style.css'
import { Theme } from './Themewrapper';

function HeaderContent() {

  const theme = useContext(Theme);

  return (
    <div className='headerpara_cont'>
        <header style={{color:theme.fontprimarycolor}} >Text Analyzer</header>
        <article style={{color:theme.fontsecondarycolor}}>
        Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.
        </article>
    </div>
  )
}

export default HeaderContent;