import { IconButton } from '@material-ui/core'
import Link from 'next/link'

import React from 'react'
import styles from './navHM.module.css'

const NavHapler = (props) => {
  return (
    <div className={styles.helperContainer}>
       
          <Link href={props.call ? `tel:8882655512`:`mailto:info@example.com?subject=subject&cc=cc@example.com`}>
                <IconButton color='secondary'>
                   {props.Icon}
               </IconButton>
          </Link>
        
       
      
         <div className={styles.helperText}>
         <Link href={props.call ? `tel:8882655512`:`mailto:info@example.com?subject=subject&cc=cc@example.com`}> 
             <a>     
             <p>{props.des}</p>
              <h2>{props.contact}</h2>
             </a>
             
         </Link>  
         </div>
    </div>
  )
}

export default NavHapler