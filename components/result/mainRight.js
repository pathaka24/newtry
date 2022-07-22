import React from 'react'
import Image from 'next/image'
import styles from './mainRight.module.css'



const MainRight = ({ name , imgUrl , des}) => {
    const botH2  = 'Be Strong and Healthy'
    const botp= 'Healing Hands team is always with our Patient'
    const li1 ='Refresing to get such a personal touch'
    const li2 = '24X7 call us any time'
    const li3='Personal therapist'
    return (
    <div className={styles.MainRightTop}>
         <div className={styles.MainRightImg}>
             <div className={styles.MainRightImge}>
                 <Image src={imgUrl} alt='healing hands' layout='fill' />
             </div>
         </div>
         <div className={styles.MainRightArt}>
             <h1>{name}</h1>
             <article>
                  {des}
             </article>
         </div>


         <div className={styles.MainRightBot}>
              <div className={styles.MainRightBotLeft}>
              <div>
                 <Image src='/service/service-5.jpg' height="350px" width="400px" alt='healing hands' />
             </div>
              </div>
              <div className={styles.MainRightBotRight}>
                  <h2>{botH2}</h2>
                    <p>{botp}</p>
                    <ul>
                        <li>{li1}</li>
                        <li>{li2}</li>
                        <li>{li3}</li> 
                    </ul>
              </div>
         </div>
    </div>
  )
}

export default MainRight