import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Mainresult from '../../components/result/mainresult';
import Listdata from '../../data/data.json'
import CircularProgress from '@mui/material/CircularProgress';

 export  function getStaticProps(staticProps) {
  const params = staticProps.params
  
  return {
    props: {
      data: Listdata.find((list) =>{
        return list.id.toString() === params.id
      }
       
        ),
    },  
  }
}

export function getStaticPaths() {
    
  const paths = Listdata.map( (list) => {
    return {
      params :{
        id: list.id.toString()
      }
    }
  })

  return {
    paths,
    fallback:true
  }
}

const ServiceList = (props) => {
  
  const route = useRouter()
     if(route.isFallback)
     {
      return  <CircularProgress />
     }
  
  return (
    <div>

          <Head>
             <title>{props.data.name}</title>
          </Head> 
          <Mainresult name={props.data.name} imgUrl={props.data.imgUrl} des={props.data.des} />
             
           
    </div>
   
  )
}

export default ServiceList