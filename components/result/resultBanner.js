import React from 'react'
import styles from './resultBanner.module.css'

import { Button } from '@material-ui/core';


const ResultBanner = ({img , name}) => {
  return (
    <div 
     className={styles.resBanner}
    style={{
        backgroundImage:`url(${img})`,
        width: '100%',
        height: '40vh',
        backgroundSize:'cover',
        backgroundPosition:'50% 50%'
    }}>
          <Button variant="contained" color="secondary">
                           {name}
          </Button>
           
    </div>
  )
}

export default ResultBanner