import React, { useEffect, useState } from 'react'
import ThemeContextProvider from '../src/ThemeContext'
import Queue from '../src/advanced/Queue'

export default { title: 'Queue'}
let sync
const myQueue = {
  name: 'A event queue 1',
  start: new Date(),
  status: 'STARTED',
  events:[]
}

const getQueue = () => {
  myQueue.status = 'RUNNING'
  myQueue.events.push({
    date: new Date(),
    name: 'SOME_EVENT',
    msg: 'something occurs'
  })
  console.log(myQueue.events)
  return myQueue
}
export const StandardQueue = () => {
  const [queue, setQueue] = useState({
    name: 'A event queue 1',
    start: new Date(),
    status: 'STARTED',
    events:[]
  })
  const [startSync, setStartSync] = useState(false)

  useEffect(() => {
    if(sync) {
      clearInterval(sync)
    }
    if(startSync) {
      sync = setInterval(() => {
        const result = getQueue()
        console.log(result.events)
        setQueue(result)
      }, 1000)
    }
  },[startSync])

  const onFollow = () => {
    setStartSync(true)
  }

  const onStop = ()=> {
    setStartSync(false)
  }

  return <ThemeContextProvider><Queue queue={queue} onFollow={onFollow} onStop={onStop}/></ThemeContextProvider>
}
