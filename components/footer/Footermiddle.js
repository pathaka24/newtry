import React from 'react'
import styles from './footermiddle.module.css'
import Link from  'next/link'

const Footermiddle = () => {

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
   
      const linkData = [
          {
            id:0,
            name:'About',
            link:'/about/aboutR'
          },
          {
            id:1,
            name:'Our Service',
            link:'/location/location'
          },
          {
             id:2,
             name:'Contact Us',
             link:'/location/location'
          },
          {
            id:3,
            name:'Therapists Details',
            link:'/about/aboutR'
          },
          {
            id:4,
            name:'Book Appointment',
            link:'/about/aboutR'
          }
      ]

  return (
    <div className={styles.footermiddleContianer}>
         <div className={styles.middleContianerOne} >
               <h2>Links</h2>
               <ul>
               { 
                    linkData.map((list)=> {
                      return (
                        <li key={list.id}>
                          <Link href={`${list.link}`}>
                               <a>
                                   {list.name}
                               </a>
                        </Link>
                        </li>
                        
                      )
                    })
                  }                     
               </ul>
         </div>

         <div  className={styles.middleContianerOne} >
              <h2>Service</h2>
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
    </div>
  )
}

export default Footermiddle