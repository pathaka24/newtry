import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavHapler from './navMH'
import styles from './navmiddle.module.css'

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { Button } from '@material-ui/core';
import { red } from '@mui/material/colors';

const NavMiddle = () => {
   const data = [
       {
        id:1,
        Icon: CallIcon,
        des: 'Call us anytime',
        contact:'88-666-000-9999',
        call:true
       },
       {
        id:2,
        Icon: EmailIcon,
        des: 'Email',
        contact:'88-666-000-9999',
        call:false
       },
       
   ]

  return (
    <div className={styles.navMiddle}>
        <div>
          <Link href='/'>
              <a>
                  <div className={styles.navMiddleImg}>
                 <Image src='/icons/hhpb.png' layout='fill' />
                 
                   </div>
              </a>
          </Link>
            
             
        </div>
        <div className={styles.navMiddleRights}>
          <div className={styles.navMiddleRight}>
              {
                data.map(({id , Icon , des , contact,call})=> {
                    return (
                     
                      <NavHapler key={id} Icon ={<Icon sx={{ color: red[900] }} />} des= {des} contact={contact}  call={call} />
                      
                    )
                  })
              }
              </div>
               <div className={styles.navMiddleRightBtn}>
                       <Button variant="contained" color="secondary">
                            Book Appointment
                      </Button>
               </div>
             
        </div>
    </div>
  )
}

export default NavMiddle