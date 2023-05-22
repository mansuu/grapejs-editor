import React from 'react'
import { GrapesjsEditor } from 'grapesjs-editor'
import SaveIcon from './images/SaveIcon.svg'
import Sect100 from './images/sect100.svg'
import Sect50 from './images/sect50.svg'
import Sect30 from './images/sect33.svg'
import Sect37 from './images/sect37.svg'
import GridItems from './images/gridItems.svg'
import ListItems from './images/listItems.svg'
import 'grapesjs-editor/dist/index.css'

const App = () => {
  const blocks = [
    {
      name: 'sect100',
      icon: Sect100
    },
    {
      name: 'sect50',
      icon: Sect50
    },
    {
      name: 'sect30',
      icon: Sect30
    },
    {
      name: 'sect37',
      icon: Sect37
    },
    {
      name: 'grid-items',
      icon: GridItems
    },
    {
      name: 'list-items',
      icon: ListItems
    }
  ]
  const loadData = () => {
    const editorData =
      window.localStorage.getItem('stylizedData') ||
      `<!DOCTYPE html>
    <html>
    <title>HTML Tutorial</title>
    <body>
    
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    
    </body>
    </html>`
    return editorData
  }
  return (
    <GrapesjsEditor
      eventEmitters={{
        save: {
          title: 'Save',
          icon: SaveIcon,
          runCommand: (commandName, html) => {
            window.localStorage.setItem('stylizedData', html)
          }
        }
      }}
      blocks={blocks}
      inlineStyles={true}
      dataOnLoad={loadData}
    />
  )
}

export default App
