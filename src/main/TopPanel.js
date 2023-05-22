import React from 'react'
// import { useHistory } from 'react-router-dom'
// import backButton from '../../images/chevron-left-matrix.svg'
// import exportButton from '../../images/editor/icon_export.svg'
// import saveButton from '../../images/editor/SaveIcon.svg'
// import undoButton from '../../images/editor/icon_undo.svg'
// import redoButton from '../../images/editor/icon_redo.svg'
// import previewButton from '../../images/editor/preview.svg'
// import infoButton from '../../images/editor/icon_info.svg'
// import closeButton from '../../images/close_with_bg.svg'
// import saveSuccessIcon from '../../images/save-cloud-success.svg'
// import saveLoadingIcon from '../../images/save-cloud.svg'
// import saveRotateIcon from '../../images/save-rotate.svg'
// import { useTranslation } from 'react-i18next'
// import CustomModal from '../customModal'
// import { routes } from '../../Uitls/Util'
// import OverlayPopOver from '../../Uitls/OverlayPopOver'
// import StylizedModuleInfo from './StylizedModuleInfo'
// import CheckBox from '../../Uitls/CheckBox'
import styles from '../styles.module.css'

const TopPanel = ({
  title,
  subTitle,
  exportButton,
  undoButton,
  redoButton,
  runCommand,
  saveButton,
  saveSuccessIcon,
  saveLoadingIcon,
  saveRotateIcon,
  previewButton,
  closeButton,
  editor,
  savingData,
  eventEmitters,
  inlineStyles
}) => {
  // const getUndoManagerStackDepth = () => {
  //   const undoManager = editor?.UndoManager
  //   const stack = undoManager?.getStack()
  //   return stack?.length
  // }
  return (
    <row className='no-gutters'>
      <div
        className={`${styles.top_panel} justify-content-between align-items-center`}
      >
        {/* <div className={`d-flex ${styles.exportleftPanel} align-items-center`}>
          <div className={styles.title_with_back}>
            <div style={{ fontWeight: 'normal' }}>
              <strong>{title}</strong>
              <div className={styles.subtitle_text}>{subTitle || ''}</div>
            </div>
          </div>

          <div id='editor_actions_btns_left' className='panel__editor-btns'>
            <div className={styles.export}>
              <div id='export'>
                <img src={exportButton} alt='' />
                <div className={styles.title}>Export</div>
              </div>
            </div>
            <div className={`${styles.tool_button} ml-0`}>
              <div
                id='undo'
                onClick={() => {
                  runCommand('undo')
                }}
              >
                <img src={undoButton} alt='' />
                <div className='title'>Undo</div>
              </div>
            </div>
            <div className={`${styles.tool_button}`}>
              <div
                id='redo'
                onClick={() => {
                  runCommand('redo')
                }}
              >
                <img src={redoButton} alt='' />
                <div className={`${styles.title}`}>Redo</div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div id='editor_actions_btns_right' className='panel__editor-btns'>
          {!savingData && (
            <div className='editor-save-notification d-flex align-items-center'>
              <img src={saveSuccessIcon} className='mr-2' alt='' />
              All changes saved
            </div>
          )}
          {savingData && (
            <div className='editor-save-notification d-flex align-items-center'>
              <div className='d-inline-block mr-2 position-relative'>
                <img src={saveLoadingIcon} alt='' />
                <img src={saveRotateIcon} alt='' className='saveRotate' />
              </div>
              Saving changes…
            </div>
          )}

          <div className={styles.tool_button}>
            <div
              id='saveDb'
              onClick={() => {
                runCommand('saveDb')
              }}
            >
              <img src={saveButton} alt='' />
              <div className='title'>Save</div>
            </div>
          </div>
          <div className='tool_button'>
            <div
              id='preview'
              onClick={() => {
                runCommand('preview')
              }}
            >
              <img src={previewButton} alt='' />
              <div className='title'>Preview</div>
            </div>
          </div>

          <img src={closeButton} alt='close' className='btn_close' />
        </div> */}
        <div className={styles.tool_button}>
          <div
            id='saveDb'
            onClick={() => {
              let editorData
              if (inlineStyles) {
                editorData = editor.runCommand('gjs-get-inlined-html')
              }
              eventEmitters.save.runCommand(
                'saveDb',
                JSON.parse(JSON.stringify(editorData))
              )
            }}
          >
            <img src={eventEmitters.save.icon} alt='' />
            <div className={styles.title}>{eventEmitters.save.title}</div>
          </div>
        </div>
      </div>
    </row>
  )
}

export default TopPanel
