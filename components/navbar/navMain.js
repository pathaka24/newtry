import React from 'react'
import TopNav from './topNav'
import NavMiddle from './navMiddle'
import BottomNam from './bottomNam'
import styles from './navmain.module.css'

const NavMain = () => {
  return (
    <div className={styles.navMain}>
        <TopNav />
        <NavMiddle />
        <hr />
        <BottomNam />
    </div>
  )
}

export default NavMain