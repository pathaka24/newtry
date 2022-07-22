import React from 'react'
import styles from './bottom.module.css'

const BottomNam = () => {
  return (
    <div className={styles.bottomCantainer}>
        <ul className={styles.bottomCantainerList}>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default BottomNam