import { useEffect, useState } from 'react'
import { Map, Marker } from "pigeon-maps"
import styles from './map.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { IconButton } from '@material-ui/core'

const  MapO = () => {
    const [mapShow, setMapShow] = useState('')
      

    useEffect(() => setMapShow('https://www.google.com/maps/dir/28.517635,77.3914624/Healing+Hands+Physiotherapy+Clinic,+GT+-46,+Sec+93,+Noida,+Uttar+Pradesh+201301/@28.5227408,77.3836032,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce997c66e256f:0xeab0e9aca5cf7ff4!2m2!1d77.3835447!2d28.5259986?hl=en'), [])
  return (
    <>
         
         <Link href={mapShow}>
          <div className={styles.mapContainer}>
                <Map  height={400} defaultCenter={[28.517635, 77.3914624]} defaultZoom={15}>
                 <Marker width={50} anchor={[28.517635, 77.3914624]} />
                </Map>
          </div>
          </Link>
     
      </>
  )
}

export default MapO