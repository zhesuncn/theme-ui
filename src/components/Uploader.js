import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'
import { StyledDiv } from './Styled'
import Icon from './Icon'


const Uploader = ({title, onFileUpload, onFileDelete, onSuccess, onError, value, className, style, maxSize, theme, ...props}) => {
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [current, setCurrent] = useState(value)

  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.uploader)

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
    <StyledDiv style={style} styles={myTheme.styles}>
      <div className="input">
        {title && <div className="label">{title}</div>}
        {
          current ? <Icon name={myTheme.validate_icon} alt='success'/> :
            (loading ? <Icon name={myTheme.loading_icon} alt='loading'/> :
             <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) =>
                  <div {...getRootProps()} className="btn">
                    <Icon name={myTheme.add_icon} alt='add'/>
                    Ajouter un fichier
                    <input {...getInputProps()} type="file" {...props} multiple={false}/>
                  </div>
                }
              </Dropzone>)
        }
      </div>
      {current && <div className="file_name">
        {current.name}
        {onFileDelete && <Icon name={myTheme.delete_icon} onClick={onFileDelete} alt='delete'/>}
      </div>}
    </StyledDiv>
  )
}
export default Uploader
