import React from 'react'
// import './styles/style.scss'
import Editor from './main/Editor'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

export const GrapesjsEditor = ({
  eventEmitters,
  blocks,
  inlineStyles,
  dataOnLoad
}) => {
  return (
    <Editor
      eventEmitters={eventEmitters}
      blocks={blocks}
      inlineStyles={inlineStyles}
      dataOnLoad={dataOnLoad}
    />
  )
}
