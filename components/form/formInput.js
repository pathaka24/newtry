import React from 'react'
import styles from './formInput.module.css'
import TextField from '@mui/material/TextField';
import {  Button  } from '@mui/material';
import Link from 'next/link'

const FormInput = () => {
  return (
     
        
    <form className={styles.form}> 
    <div className={styles.formHead}>
       <h2>
        FILL THE FORM
       </h2>
    </div>
          <div className={styles.formInputHandle}>
          <TextField fullWidth id="fullWidth" label="Name"     />
          </div>
           
         
         <div className={styles.formInputHandle}>
         <TextField fullWidth id="fullWidth" label="Email"    />
         </div>
      
           <div className={styles.formInputHandle}>
           <TextField fullWidth id="fullWidth" label="Number"   />
           </div>
           
           <div className={styles.formInputHandle}>
           <TextField fullWidth label="Your message" id="fullWidth" multiline
          rows={4} />
           </div>
         
      
     

    
             <div className={styles.formInputHandle}>
             <Button type='submit' variant="contained" color="secondary">
                  <Link href='mailto:info@example.com?subject=subject&cc=cc@example.com'>
               
                        Make an Appointment
                  </Link>
                     
            </Button>
             </div>
    
       
         
    </form>
   
  )
}

export default FormInput