import React from 'react'
import Hero from './component/hero/page'
import Contact from './component/contact/page'
import Page from './component/project/page'
import ABOUT from './component/about/page'
import Skills from './component/skills/page'
function Home() {
  return (
    <div>
      <Hero />
      <Page />
      <ABOUT />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
