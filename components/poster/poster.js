import React from 'react'
import styles from './poster.module.css'
import Image from 'next/image'
import { IconButton } from '@mui/material'
 
 

const Poster = (props) => {
    const para = 'Innovation is more than having new ideas: it includes the process of successfully introducing them or making things happen in a new way. It turns ideas into useful, practicable and commercial products or services.'
  return (
    <div className={styles.posterMain}>
        <div 
          className={styles.posterLeft}
        style={{
            backgroundImage:`url(${props.imgUrl})`,
            height:'100vh',
            width:'100%',
            backgroundSize:'cover',
            backgroundPosition:'50% 50%'
        }}>
        
        </div>
        <div className={styles.posterRight}
            >
        
        <div  className={styles.posterRightPro}
             style={{
                backgroundImage:`url(${props.pattern})`,
                height:'100vh',
                 
                backgroundSize:'cover',
                backgroundPosition:' 100%',
                zIndex:'100'
            }}
         >
             <div className={styles.posterRightTop}>
                 <h2>SOLUTIONS TO YOUR PAIN</h2>
             </div>
             <div className={styles.posterRightText}>
                  <h1>
                     We Proudly Give Quality Treatments
                  </h1>
                  <h3>
                      {para}
                  </h3>
             </div>
             <div className={styles.posterRightBot} >
                   <h3>
                  
                    <span>  <IconButton><Image src='/icons/pub.svg' height='30px' width='30px' /></IconButton></span>24 Hours Emergency Services</h3>
                   <h3> <span>  <IconButton><Image src='/icons/pub.svg' height='30px' width='30px' /></IconButton></span>Professional and Certified Therapists</h3>
                   <h3> <span>  <IconButton><Image src='/icons/pub.svg' height='30px' width='30px' /></IconButton></span>Get Free Consultation Anytime</h3>
             </div>
              
        </div>
        </div>
        
    </div>
  )
}

export default Poster