import React from 'react'
import styles from '../styles.module.css'

const LeftPanel = (props) => {
  return (
    <div className={styles.editorLeftPanel}>
      <div className='leftPanelscrollbar customScrollBar'>
        <div id='blocks' className='no-gutters ml-0`' />
      </div>
    </div>
  )
}

export default LeftPanel
