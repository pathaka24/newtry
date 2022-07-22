import React from 'react'
import styles from './testomoni.module.css'
import TestList from './testList'

const Testomoni = () => {
 
    const data = "What are our Patient say ? "
     
  return (
    <div className={styles.testMain}>
         <div className={styles.testTop}>
              <h1>{data}</h1>
         </div>
        <div className={styles.testBot}>
        <TestList />
        <TestList />
        <TestList />
        <TestList />
        <TestList />
        <TestList />
         
        </div>
        
    </div>
  )
}

export default Testomoni