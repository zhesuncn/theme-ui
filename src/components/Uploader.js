import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { useTheme } from '../ThemeContext'
import Icon from './Icon'
import ThemeComponent from './ThemeComponent'
import styled from 'styled-components'
import Field from './Field'

const Container = styled.div`
    .input {
      height: 50px;
      background: ${props => props.palette.gray_background};
      border-radius:  ${props => props.variable.radius};
      padding: 0 ${props => props.variable.padding.m};
      color: ${props => props.palette.black_grey};
      font-size: 14px;
      font-weight: 300;
      display: flex;
      justify-content: space-between;
      align-items: center;
      outline: none;
    }
    .btn {
      display: flex;
      align-items: center;
      font-weight: normal;
      cursor: pointer;
      outline: none;
    }
    .file_name img, .file_name svg {
      cursor: pointer;
    }
    .btn img, .btn svg {
      margin-right: ${props => props.variable.padding.s};
    }
    .file_name {
      height: 40px;
      background: ${props => props.palette.gray_background_light};
      border-radius: ${props => props.variable.radius};
      padding: 0 ${props => props.variable.padding.m};
      margin: 0 ${props => props.variable.padding.s};
      color: text_black;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
`

const Uploader = ({label, onFileUpload, onFileDelete, onSuccess, onError, value, className, style, maxSize, ...props}) => {
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [current, setCurrent] = useState(value)

  const theme = useTheme()

  useEffect(()=> {
    setCurrent(value)
  }, [value])

  const onDrop = async acceptedFiles => {
    const file = acceptedFiles[0]
    if (maxSize && file.size > maxSize * 1048576) {
      // setError(`File max size is ${maxSize} mb`)
      onError && onError(`File max size is ${maxSize} mb`)
      return
    }
    setLoading(true)
    if (onFileUpload) {
      try {
        await onFileUpload(file)
        onSuccess && onSuccess()
      }catch (e) {
        // setError(e.message)
        onError && onError(e.message)
      }
    }
    setCurrent(file)
    setLoading(false)
  }

  return (
    <Field label={label}>
      <ThemeComponent
        className="uploader"
        container={Container}
        style={style}>
        <div className="input">
          {
            current ? <Icon name={theme.images.validate_icon} alt='success'/> :
              (loading ? <Icon name={theme.images.loading_icon} alt='loading'/> :
               <Dropzone onDrop={onDrop}>
                  {({getRootProps, getInputProps}) =>
                    <div {...getRootProps()} className="btn">
                      <Icon name={theme.images.add_icon} alt='add'/>
                      Ajouter un fichier
                      <input {...getInputProps()} type="file" {...props} multiple={false}/>
                    </div>
                  }
                </Dropzone>)
          }
        </div>
        {current && <div className="file_name">
          {current.name}
          {onFileDelete && <Icon name={theme.images.delete_icon} onClick={onFileDelete} alt='delete'/>}
        </div>}
      </ThemeComponent>
    </Field>
  )
}
export default Uploader
