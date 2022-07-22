import React from 'react'
import About from '../../components/about/about'
import ResultBanner from '../../components/result/resultBanner'

const AboutR = () => {
  return (
    <div> 
       <ResultBanner  img='/service/page-title.jpg' name='About' />
        <About />
    </div>
  )
}

export default AboutR