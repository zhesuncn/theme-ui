import React, { useEffect, useState } from 'react'

import Editable from './Editable'
import Input from './Input'
import DefaultEditionContainer from './Editable/DefaultEditionContainer'
import { useTheme } from '../ThemeContext'
import { getCurrentTheme } from '../themes/util'


const EditableInput = ({value, label, theme, ...props}) => {
  const [current, setCurrent] = useState('')
  useEffect(() => {
    setCurrent(value)
  }, [value])

  const themeContext = useTheme()
  let myTheme = getCurrentTheme(theme, themeContext.editableInput)

  return <Editable
    value={current}
    onChanged={(v) => {setCurrent(v)}}
    editContainerOptions={
      {
        component: DefaultEditionContainer,
        props: {
          theme: myTheme
        }
      }
    }
    editRender={({onChanged, value}) => {
      return <React.Fragment>
        <Input label={label} value={value} onValueChanged={(formatted, raw) => {
          onChanged(raw)}}/>
      </React.Fragment>
    }}
    theme={myTheme}
    {...props}
  >
    {current}
  </Editable>
}

export default EditableInput
