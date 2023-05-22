import React from 'react'
import styles from '../styles.module.css'
// eslint-disable-next-line no-empty-pattern
const Properties = ({}) => {
  return (
    <div className={styles.editorLeftContainer}>
      {/* <div id='selectors-container'></div> This is for selected component title */}
      <div id='stylesMangerBlock' />
      <div id='traitBlock' />
    </div>
  )
}

export default Properties
