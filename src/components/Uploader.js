import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { useTheme } from '../ThemeContext'
import { getSrc } from '../svg'
import { getCurrentTheme } from '../themes/util'
import { StyledDiv } from './Styled'


const Uploader = ({title, onFileUpload, onFileDelete, onSuccess, onError, value, className, style, maxSize, theme, ...props}) => {
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [current, setCurrent] = useState(value)

  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.uploader)
  const validateImage = getSrc(myTheme.validate_icon)
  const addImage = getSrc(myTheme.add_icon)
  const loadingImage = getSrc(myTheme.loading_icon)
  const deleteImage = getSrc(myTheme.delete_icon)

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
          current ? <img src={validateImage} alt='success'/> :
            (loading ? <img src={loadingImage} alt='loading'/> :
             <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) =>
                  <div {...getRootProps()} className="btn">
                    <img src={addImage} alt='add'/>
                    Ajouter un fichier
                    <input {...getInputProps()} type="file" {...props} multiple={false}/>
                  </div>
                }
              </Dropzone>)
        }
      </div>
      {current && <div className="file_name">
        {current.name}
        {onFileDelete && <img src={deleteImage} onClick={onFileDelete} alt='delete'/>}
      </div>}
    </StyledDiv>
  )
}
export default Uploader
