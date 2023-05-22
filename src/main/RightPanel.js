import React from 'react'
import styles from '../styles.module.css'

import Properties from './Properties'
const RightPanel = ({ editor, module }) => {
  // const [selectedTabIndex, setSelectedTabIndex] = useState(1)
  // useEffect(() => {
  //   showAndHideTab(selectedTabIndex)
  // }, [])
  // const showAndHideTab = (selectedIndex) => {
  //   if (selectedIndex === 1) {
  //     document.getElementById('properties').style.display = 'block'
  //     document.getElementById('businessrules').style.display = 'none'
  //   } else {
  //     document.getElementById('properties').style.display = 'none'
  //     document.getElementById('businessrules').style.display = 'block'
  //   }
  // }
  return (
    <div className=' pt-3'>
      {/* <div className='row rhs-panel-tabs no-gutters'>
        <div
          className={`col-md-6 text-center rhs-panel-tab ${
            selectedTabIndex === 0 ? 'rhs-panel-tab-selected' : ''
          }`}
          onClick={() => {
            setSelectedTabIndex(0)
            showAndHideTab(0)
          }}
        >
          Business Rules
        </div>
        <div
          className={`col-md-6 text-center rhs-panel-tab ${
            selectedTabIndex === 1 ? 'rhs-panel-tab-selected' : ''
          }`}
          onClick={() => {
            setSelectedTabIndex(1)
            showAndHideTab(1)
          }}
        >
          Properties
        </div>
      </div> */}
      {/* <div id='businessrules' className='businessrules customScrollBar'>
        {' '}
        <BusinessRules module={module} />
      </div> */}
      <div id='properties' className={`${styles.properties} customScrollBar`}>
        {' '}
        <Properties />
      </div>
    </div>
  )
}

export default RightPanel
