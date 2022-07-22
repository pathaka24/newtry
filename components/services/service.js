import React from 'react'
import ServiceList from './servciceList'
import styles from './service.module.css'

const Service = () => {
    const data = [
        {
          id:0,
          imgUrl: '/service/service-5.jpg',
          serviceName:'Physiotherapy',
          des:'Physiotherapy is treatment to restore, maintain, and...'
        },
        {
          id:1,
          imgUrl: '/service/service-6.jpg',
          serviceName:'Massage Therapy',
          des:'In massage therapy, a trained, certified medical professional...'
        },
        {
          id:2,
          imgUrl: '/service/service-8.jpg',
          serviceName:'Chiropratic Therapy',
          des:'Spinal manipulation and manual manipulation.7 This type of manual ...'
        },
        {
          id:3,
          imgUrl: '/service/service-7-1.jpg',
          serviceName:'Sport Injuries',
          des:'Sports injuries occur while participating in organized...'
        },
       
        {
          id:4,
          imgUrl: '/service/service-9-1.jpg',
          serviceName:'Clinical Pilates',
          des:'rohealth Sports and Spinal clinical pilates programmes...'
        },
        {
          id:5,
          imgUrl: '/service/service-10.jpg',
          serviceName:'Work Injuries',
          des:'Pain in the upper limb is frequent among employees...'
        }
         
       ]
  return (
    <div className={styles.serviceConMain} >
          <div className={styles.serviceConText} >
                <h1>Our Services</h1>
          </div>
          <div  className={styles.serviceCon} key={data.id}>
           {
            data.map((data)=> {
                return (
                    <div  className={styles.serviceCon1} key={data.id}>
                    <ServiceList id={data.id}  imgUrl= {data.imgUrl} serviceName={data.serviceName} des={data.des} />
                    </div>
                 )
            }
              
            )
          }
          </div>
    </div>
  )
}

export default Service