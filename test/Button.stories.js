import Button from '../src/components/Button'
import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'

export default { title: 'Button' }

const onClickPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

export const button = () => {
  const colors = [null, 'primary', "secondary", "success", "error", "warn", "#AFAFAF"]
  return <ThemeContextProvider>
    <div>
      Color properties:
    </div>
    <div style={ { marginTop: "10px" } }>
      {colors.map(c => <Button onClick={ onClickPromise } color={c}>{
        c?c: "Default button"
      }</Button>)}
    </div>
    <div style={ { marginTop: "30px" } }>
      Color properties + disabled:
    </div>
    <div style={ { marginTop: "10px" } }>
      {colors.map(c => <Button disabled={ true } onClick={ onClickPromise } color={c}>{
        c?c: "Default button"
      }</Button>)}
    </div>
    <div style={ { marginTop: "30px" } }>
      Color properties + class "invert":
    </div>
    <div style={ { marginTop: "10px" } }>
      {colors.map(c => <Button  className="invert" onClick={ onClickPromise } color={c}>{
        c?c: "Default button"
      }</Button>)}
    </div>
    <div style={ { marginTop: "10px" } }>
      {colors.map(c => <Button disabled={ true } className="invert" onClick={ onClickPromise } color={c}>{
        c?c: "Default button"
      }</Button>)}
    </div>
    <div style={ { marginTop: "30px" } }>
      Color properties + class "clear":
    </div>
    <div style={ { marginTop: "10px" } }>
      {colors.map(c => <Button className="clear" onClick={ onClickPromise } color={c} style={ { marginRight: "10px" } } >{
        c?c: "Default button"
      }</Button>)}
    </div>
    <div style={ { marginTop: "10px" } }>
      {colors.map(c => <Button disabled={ true } className="clear" onClick={ onClickPromise } color={c} style={ { marginRight: "10px" } } >{
        c?c: "Default button"
      }</Button>)}
    </div>
  </ThemeContextProvider>
}

