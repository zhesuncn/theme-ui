import React from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Notification from '../src/components/Notification'

export default { title: 'Notification'}

export const autoHide = () => <ThemeContextProvider><Notification>This notification will close after 5s</Notification></ThemeContextProvider>

export const notAutoHide = () => <ThemeContextProvider><Notification autohide={false}>This notification will not close util you click on close button</Notification></ThemeContextProvider>
