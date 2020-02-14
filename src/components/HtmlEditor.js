import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import './react-draft-wysiwyg.css'
import React, { useEffect, useState } from 'react'
import draftToHtml from 'draftjs-to-html'

const createState = (html) => {
  const blocks = convertFromHTML(html || '')
  const initstate = ContentState.createFromBlockArray(
    blocks.contentBlocks,
    blocks.entityMap,
  )
  return EditorState.createWithContent(initstate)
}
const getHtml = (state) => {
  const raw = convertToRaw(state.getCurrentContent())
  return draftToHtml(raw)
}

const HtmlEditor = (props) => {
  const {
    initValue,
    onValueChanged,
    state,
    onStateChanged,
    ...otherProps
  } = props

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  useEffect(() => {
    if(initValue) {
      const defaultEditorState = createState(initValue)
      setEditorState(defaultEditorState)
    }
  }, [initValue])

  const onEditorStateChange = (s) => {
    onValueChanged && onValueChanged(getHtml(s))
    !state && setEditorState(s)
    onStateChanged && onStateChanged(s)
  }
  return <Editor
    editorState={state || editorState}
    onEditorStateChange={onEditorStateChange}
    {...otherProps}
  />
}

export default HtmlEditor
export {
  createState, getHtml
}