import React from 'react'
import styles from './resultLeft.module.css'
import Link from  'next/link'
 
import { Button } from '@material-ui/core';

const ResultLeft = () => {
     const Datalink = [
         {
            id:0,
            link:"Physiotherapy"
         },
         {
          id:1,
          link:"Massage Therapy"
       },
       {
        id:2,
        link:"Chiroptratic Therapy"
       },
       {
        id:3,
        link:"Sport Injuries"
       },
       {
        id:4,
        link:"Clinical Pilates"
       },
       {
        id:5,
        link:"Work Injuries"
       }
     ]

     const da= 'Need Help?'
     const h3 = "Speak with a human to filling out a form? call corporate office and we will connect you with a team member who can help."
  return (
    <div className={styles.resLeftMain}>
          <div className={styles.resLeftMainTop}>
               <h2>All Categories</h2>
               <ul>
                {
                    Datalink.map((list)=> {
                      return (
                        <li key={list.id}>
                          <Link href={`/service/${list.id}`}>
                               <a>
                                   {list.link}
                               </a>
                        </Link>
                        </li>
                        
                      )
                    })
                }
                  
              </ul>
         </div>
         <div className={styles.resLeftBot}>
              <h1>
                  {da}
              </h1>
              <h3> 
                  {h3}
              </h3>
              <h1>
                <Link href='tel:666666666'>
                666666666
                </Link>
              </h1>
              <Button variant="contained" color="secondary">
                            Book Appointment
               </Button>
         </div>
    </div>
  )
}

export default ResultLeft