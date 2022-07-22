import React from 'react'
import styles from './footerleft.module.css'
import Image from 'next/image'
import Link from 'next/link' 
import { IconButton } from '@mui/material';



const Footerleft = () => {
    const email = 'healinghands@gmail.com'
  return (
    <div className={styles.footerLeft}>
        <div className={styles.Topcontainer}>
        <div className={styles.imgContainer}>
            <Link href='/'> 
                <Image src='/icons/hhp1.png' layout='fill' /> 
            </Link>
              
        </div>
        <h1>
             <Link href='/'>
                   <a>
                   HealingHands
                   </a>
              </Link>
        </h1>
        </div>
        <div className={styles.middleContainer}>
               <ul>
                   <li className={styles.iconsContainer}>
                      <Link href='mailto:info@example.com?subject=subject&cc=cc@example.com'>
                            <a>
                            <Image src='/icons/email.svg' height="25px" width="25px" alt='healing hands'/>
                            </a>
                      </Link>
                     
                   </li>
                   <li>
                       <p>{email}</p>
                   </li>
               </ul>
               <ul>
                   <li>
                    <Link href='/location/location'>
                         <a>
                         <Image src='/icons/location.svg' height="25px" width="25px" />
                         </a>
                    </Link>
                      
                   </li>
                   <li>
                       <p>noida sec 93</p>
                   </li>
               </ul>
        </div>
        <div className={styles.botFooter}>
             <div>
                <IconButton>
                    <Link href='tel:8882655512'>
                         <a>
                         <Image src='/icons/phone.svg' height='25px' width='25px' alt='healing hands' />
                         </a>
                    </Link>
               
                </IconButton >
                 
             </div>
             <div>
                   <p>Call us anytime</p>
                   <h3>666600009999</h3>
             </div>
        </div>
    </div>
  )
}

export default Footerleft