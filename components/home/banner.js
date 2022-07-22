import React from 'react'
import styles from './banner.module.css'

const Banner  = ({img}) => {
  return (
    <div  >
    <div  
    style= {{
        backgroundImage:`url(${img})`,
        
        backgroundSize:'cover',
        backgroundPosition:'50% 50%'
     }}
    >
        <div className={styles.mainBannerCon}  >
               <div className={styles.mainBannerText}>
                    <p>Welcome to physiotherapy clinic</p>
               </div>
               <div className={styles.mainBannerHead}>
                    <h1>
                         We are Here to Save Lives and Properties
                         Passionate to help With us, you feel secure,
                         Keeping you to a better life
                    </h1>
               </div>
               <div className={styles.mainBannerBtn}>
                    <button>
                         Discover
                    </button>
               </div>
        </div>
    </div>
    </div>
  )
}

export default Banner