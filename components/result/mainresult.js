import React from 'react'
import styles from './mainresult.module.css'
import MainRight from './mainRight'
import ResultBanner from './resultBanner'
import ResultLeft from './resultLeft'

const Mainresult = ({ name , imgUrl , des }) => {
  return (
    <div>
        <div>
         <ResultBanner img='/service/page-title.jpg' name={name} />
        </div>
        <div className={styles.botResult}>
          <div className={styles.botResultLeft}>
             <ResultLeft />
          </div>
          <div className={styles.botResultRight}>
             <MainRight name={name} imgUrl= {imgUrl} des={des} />
          </div>
       
        </div>
        
    </div>
  )
}

export default Mainresult