import React from 'react'
import Image from 'next/image'
import styles from './basicList.module.css'
import Button from '@mui/material/Button';

const BasicList = (props) => {
  return (
    <div className={styles.basicListCon} style={{background: `${props.bgcolor}`}}>
        <div className={styles.basicListCon1}>
        <div className={styles.basicImg} >
            <Image src={props.imgUrl} layout='fill' alt='healing hands' />
        </div>
         <div  className={styles.basicText} style={{color: `${props.titleColor}`}}>
              <h1>{props.title}</h1>
         </div >
        <div className={styles.basicText} style={{color: `${props.color}`}}> 
              <p>{props.des}</p>
        </div>
        <Button   variant="contained" color="secondary">
               Read More
        </Button>
        </div>
    </div>
  )
}

export default BasicList