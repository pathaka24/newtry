import React from 'react'
import styles from './formCon.module.css'

const FormCon = () => {
  const para = 'WE’RE HERE TO HELP YOU'
  return (
    <div className={styles.formMain}>
        <div className={styles.formMainTop}>
            <p>{para}</p>
            <h1>Start Up Your Health <br />
             Care With Us</h1>
        </div>
       <div className={styles.formMainBot}>
            <h2>
            HealingHands is trust by more<br />
            then 8800 healthy patients
            </h2>
       </div>
    </div>
  )
}

export default FormCon