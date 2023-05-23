import React, { useEffect, useState } from 'react'

import geditorConfig from './getGrapeJsEditor'
// import LeftPanel from './LeftPanel'
import TopPanel from './TopPanel'
import 'grapesjs/dist/css/grapes.min.css'
import styles from '../styles.module.css'
import RightPanel from './RightPanel'
// import '../styles/home.css'

const Editor = (props) => {
  const { eventEmitters, blocks, inlineStyles, dataOnLoad } = props
  const [editor, setEditor] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(undefined)
  // eslint-disable-next-line no-unused-vars
  const [isOpenPanel, setIsOpenPanel] = useState(true)
  // const [moduleData, setModuleData] = useState(undefined)
  // const [stylizedModuleInfo, setStylizedModuleInfo] = useState(undefined)
  // const [isloading, setIsloading] = useState(false)
  // const [savingData, setSavingData] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [stylizedModule, setStylizedModule] = useState(undefined)

  useEffect(() => {
    const editor = geditorConfig(dataOnLoad, blocks)

    setEditor(editor)
    document.body.style.backgroundColor = '#f3f6fa'
  }, [])

  // const openPanel = () => {
  //   setIsOpenPanel(!isOpenPanel)
  // }

  // const drag = (type, data, e) => {
  //   e.dataTransfer.setData(type, data)
  // }

  const getStylizedModuleInfo = () => {
    // const createdDate = stylizedModuleInfo?.createdDateTime
    //   ? new Date(stylizedModuleInfo?.createdDateTime)
    //   : new Date()
    // const editedDate = stylizedModuleInfo?.upatedDateTime
    //   ? new Date(stylizedModuleInfo?.upatedDateTime)
    //   : new Date()
    // return {
    //   createdDate: moment(createdDate).format('MM/DD/YYYY'),
    //   createdBy: stylizedModuleInfo?.cretedByname || getCurrentUser(),
    //   editedDate: moment(editedDate).format('MM/DD/YYYY'),
    //   editedBy: stylizedModuleInfo?.updatedByname || getCurrentUser()
    // }
  }

  const exportModule = (exportTypes, callback) => {
    //   setIsloading(true)
    //   exportTypes.forEach((type, index) => {
    //     const fileName =
    //       moduleData.module.moduleName +
    //       '_' +
    //       capitalizeString(options[selectedOption]) +
    //       '_' +
    //       'Stylizedmodule'
    //     const extension = `.${type.toLowerCase()}`
    //     const payload = {
    //       type: type,
    //       fileName: fileName + extension,
    //       html: `<!DOCTYPE html> <html><head>
    // <meta http-equiv='Content-Type' content='text/html charset=UTF-8' />
    // <meta name='format-detection' content='telephone=no' />
    // <meta http-equiv='X-UA-Compatible' content='IE=Edge' />
    // </head>${editor.runCommand('gjs-get-inlined-html')}</html>`
    //     }
    //     exportStylizedModule(payload, (res, err) => {
    //       setIsloading(false)
    //       if (res) {
    //         if (type.toLowerCase() === 'pdf') {
    //           downloadPdfFromByteArray([res.data], fileName)
    //         }
    //         if (type.toLowerCase() === 'html') {
    //           var file = new File(['\ufeff' + res.data], fileName + extension, {
    //             type: 'text/plain:charset=UTF-8'
    //           })
    //           //create a ObjectURL in order to download the created file
    //           const url = window.URL.createObjectURL(file)
    //           //create a hidden link and set the href and click it
    //           var a = document.createElement('a')
    //           a.style = 'display: none'
    //           a.href = url
    //           a.download = file.name
    //           a.click()
    //           window.URL.revokeObjectURL(url)
    //         }
    //       }
    //       if (index === exportTypes.length - 1) {
    //         callback()
    //       }
    //       if (err) {
    //         showError(err.response && err.response.status)
    //       }
    //     })
    //   })
  }

  const runEditorCommand = (command, exportTypes, callback) => {
    switch (command) {
      case 'saveDb':
        editor.runCommand('saveDb')
        break
      case 'undo':
        editor.runCommand('undo')
        break
      case 'redo':
        editor.runCommand('redo')
        break
      case 'export':
        exportModule(exportTypes, () => {
          callback()
        })
        break
      case 'preview':
        setStylizedModule(editor.runCommand('gjs-get-inlined-html'))
        break
      case 'info':
        return getStylizedModuleInfo()
      case 'publish':
        break
      case 'close':
        break
      default:
        break
    }
  }

  return (
    <div className='container-fluid p-0' style={{ backgroundColor: 'f3f6fa' }}>
      <TopPanel
        runCommand={runEditorCommand}
        editor={editor}
        eventEmitters={eventEmitters}
        inlineStyles={inlineStyles}
      />
      <div className={`${styles.row} ml-0 mr-0 mt-4`}>
        {/* <div className={`col-md-3 ${styles.editorPanelBorder}`}>
          <LeftPanel
            isOpenPanel={isOpenPanel}
            openPanel={openPanel}
            onDragContent={drag}
          />
        </div> */}
        <div
          className={`col-md-9 pt-4 ${styles.editorPanelBorder} ${styles.editor_panel}`}
          style={{ backgroundColor: 'white' }}
        >
          <div className={`${styles.editorContainer} customScrollBar`}>
            <div id='gjsEditor' />
          </div>
        </div>
        <div className={`${styles.properties_col} ${styles.editorPanelBorder}`}>
          <RightPanel editor={editor} />
        </div>
      </div>
    </div>
  )
}

export default Editor
