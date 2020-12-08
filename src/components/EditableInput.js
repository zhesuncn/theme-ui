import React, { useEffect, useState } from 'react'

import Editable from './Editable'
import Input from './Input'
import DefaultEditionContainer from './Editable/DefaultEditionContainer'
import { useTheme } from '../ThemeContext'


const EditableInput = ({value, label, ...props}) => {
  const [current, setCurrent] = useState('')
  useEffect(() => {
    setCurrent(value)
  }, [value])

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
    {...props}
  >
    {current}
  </Editable>
}

export default EditableInput
