import React from 'react'
import styles from '../styles.module.css'

// import Properties from './Properties'
const RightPanel = ({ editor, module }) => {
  return (
    <div className=' pt-3'>
      <div id='properties' className={`${styles.properties} customScrollBar`}>
        {' '}
        <div id='stylesMangerBlock' />
        <div id='traitBlock' />
      </div>
    </div>
  )
}

export default RightPanel
