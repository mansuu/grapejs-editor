import grapesjs from 'grapesjs'
import grapejsPresetNewsletterPlugin from 'grapesjs-preset-newsletter'
// import '../styles/home.css'

import { defaultBlocks, getBlock, styleManager } from './editorUtils'

function getGrapeJsEditor(dataOnLoad, blocks) {
  let blockIds = []
  blocks.forEach((block) => {
    blockIds = blockIds.concat(block.name)
  })

  const editor = grapesjs.init({
    container: '#gjsEditor',
    blockManager: defaultBlocks,
    styleManager: styleManager,
    storageManager: {
      type: 'remote',
      stepsBeforeSave: 1,
      contentTypeJson: true,
      storeComponents: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true
    },
    // canvas: {
    //   styles: ['../styles/home.css']
    // },
    // style: `.gjs-pn-panels {display : none !important},
    // .gjs-pn-panels.gjs-one-bg {background-color:white !important}
    // .gjs-pn-views-container {display:none}
    // .gjs-pn-panel .gjs-pn-commands{display:none !important}`,
    traitManager: {
      appendTo: '#traitBlock'
    },
    plugins: [
      // 'gjs-blocks-basic',
      (editor) =>
        grapejsPresetNewsletterPlugin(editor, {
          blocks: blockIds,
          block: (id) => {
            const block = blocks.find((block) => {
              return block.name === id
            })
            return getBlock(block.name, block.icon)
          },
          // blocks: blocks,
          updateStyleManager: true
        })
      // grapesJsexportPlugin
    ],
    pluginsOpts: {
      grapesJsexportPlugin: {}
    },

    showDevices: false,
    showPreview: false,
    devicePreviewMode: false,
    assetManager: {
      // ...
      custom: {
        open(props) {},
        close(props) {}
      }
    }
  })

  const updateText = document.getElementsByClassName('gjs-toolbar')
  const changeText = document.getElementsByClassName(
    'gjs-rte-toolbar gjs-one-bg'
  )

  editor.on('rte:enable', () => {
    if (changeText && changeText[0]) {
      updateText[0].style.display = 'none'
    }
  })

  editor.on('rte:disable', () => {
    if (updateText && updateText[0]) {
      updateText[0].style.display = 'block'
    }
  })

  editor.RichTextEditor.add('orderedList', {
    icon: '',
    attributes: { title: 'Ordered List', class: 'gjs-rte-action ordered-list' },
    result: (rte) => {
      const rteEl = editor.RichTextEditor.getToolbarEl()
      rteEl.firstChild.childNodes.forEach((child, idx) => {})
      rte.exec('insertOrderedList')
    }
  })

  editor.RichTextEditor.add('unorderedList', {
    icon: '',
    attributes: {
      title: 'Unordered List',
      class: 'gjs-rte-action unordered-list'
    },
    result: (rte) => rte.exec('insertUnorderedList')
  })

  editor.RichTextEditor.add('superscript', {
    icon: '<b>S<sup>s</sup></b>',
    attributes: { title: 'Superscript' },
    result: (rte) => rte.exec('superscript')
  })

  editor.RichTextEditor.add('subscript', {
    icon: '<b>S<sub>s</sub></b>',
    attributes: { title: 'Subscript' },
    result: (rte) => rte.exec('subscript')
  })

  editor.Commands.add('set-device-desktop', {
    run: (editor) => editor.setDevice('Desktop')
  })
  editor.Commands.add('set-device-mobile', {
    run: (editor) => editor.setDevice('Mobile')
  })
  // Save Button
  editor.Commands.add('saveDb', {
    run: (editor, sender) => {
      editor.store()
    }
  })

  // Clear Button
  editor.Commands.add('cmd-clear', {
    run: (editor) => {
      editor.DomComponents.clear()
      editor.CssComposer.clear()
    }
  })
  // Undo
  editor.UndoManager.getInstance().set('maximumStackLength', 10)
  editor.Commands.add('undo', {
    run: (editor) => editor.UndoManager.undo()
  })

  // Redo
  editor.Commands.add('redo', {
    run: (editor) => editor.UndoManager.redo()
  })
  // editor.Commands.add('export', {
  //   run: (editor, type) => editor.runCommand('gjs-export-zip'),
  // })

  // Show guides
  // editor.Commands.add('visibility', {
  //   run: (editor) => editor.runCommand('sw-visibility')
  // })

  editor.Storage.add('remote', {
    async load() {
      try {
        const res = await dataOnLoad()
        editor.setComponents(res)
        // return res
      } catch (err) {
        console.log(err)
      }
    },

    store(data) {
      // const html = editor.runCommand('gjs-get-inlined-html')
      // const payLoad = {
      //   channelType: capitalizeString(channelType),
      //   brand: brand,
      //   modularProjectId: modularProjectId,
      //   cretedByname: stylizedModule?.cretedByname || getCurrentUser(),
      //   updatedByname: getCurrentUser(),
      //   stylisedVersion: { editorData: data, htmlData: html },
      // }
      // setSavingData(true)
      // saveStylizedModule(cmId, payLoad, (res, err) => {
      //   if (err) {
      //     const errorCode = err.response && err.response.status
      //     showError(errorCode)
      //   } else {
      //     setTimeout(() => {
      //       setSavingData(false)
      //     }, 700)
      //     setStylizedModuleInfo((prevState) => ({
      //       ...prevState,
      //       updatedByname: getCurrentUser(),
      //       upatedDateTime: new Date(),
      //     }))
      //   }
      // })
    }
  })
  // editor.on('load', function () {
  //   editor.runCommand('sw-visibility')
  // })
  editor.on('component:selected', function (e) {
    console.log(e)
  })
  editor.Panels.getPanel('commands').set('visible', false)
  editor.Panels.getPanel('devices-c').set('visible', false)
  editor.Panels.getPanel('options').set('visible', false)
  editor.Panels.getPanel('views').set('visible', false)
  // editor.getWrapper().addClass('gjs-one-bg')

  return editor
}

export default getGrapeJsEditor
