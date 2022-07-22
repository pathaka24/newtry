import React from 'react'
import BasicList from './basicList'
import styles from './basicInfo.module.css'

const BasicInfo = () => {
    const infoData = [
        {
            id:1,
            imgUrl: '/assets/thumbUp.png',
            title: 'Expert Therapists',
            des: 'We have team of fully qualified and dedicated personal to the patient.',
            bgcolor: '#9E0036',
            titleColor:'#FFFFFF',
            color: '#EDEDED',

        },
        {
            id:2,
            imgUrl:'/assets/clock.png',
            title: 'Emergency Service',
            des:'You will find us near you at any emergency service , We always with you',
            bgcolor:'#FFDC78',
            titleColor:'#000',
             color: '#9E0036'
        },
        {
            id:3,
            imgUrl:'/assets/cun.webp',
            title:'Free Consultant',
            des:'You will find us near you at any emergency service we work 24X7',
            bgcolor:'#F8F7F3',
            titleColor:'#9E0036',
            color:'#000'
        }
    ]
  return (
    <div className={styles.basicInfoCon}> 
        {
            infoData.map(({ id, imgUrl , title , des , color , bgcolor , titleColor})=> {
                return (
                    <BasicList 
                     key={id} 
                     imgUrl={imgUrl} 
                     title={title} 
                     des={des}
                      color={color} 
                       bgcolor={bgcolor}
                       titleColor={titleColor}
                        />
                )
            })
        }
        
       
    </div>
  )
}

export default BasicInfo