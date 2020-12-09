import Button from '../../src/components/Button'
import React, { useState } from 'react'
import moment from 'moment'
import { useTheme } from '../ThemeContext'
import Icon from '../components/Icon'
import ThemeComponent from '../components/ThemeComponent'


const Queue = ({queue, onStop, onFollow, defaultOpen, children, ...props}) => {
  const [open, setOpen] = useState(defaultOpen)
  const theme = useTheme()

  const formateDate = (date) => {
    return moment(date).format(theme.variable.dateFormat || 'DD/MM/YYYY HH:mm:ss')
  }
  return <ThemeComponent className='queue' {...props}>
    <div class='title'>{queue.name}</div>
    <div>Started at: {formateDate(queue.start)}</div>
    <div className='status'>Status:&nbsp;&nbsp;<span>{queue.status}</span>
      {
        queue.status === "RUNNING" &&
        <Icon name={theme.images.loading_icon}/>
      }
    </div>
    <Button size={150} className= 'underline' color='text'
            onClick={() => {setOpen(!open)}}>
      {open ? "Hide":"More..."}
    </Button>
    {open && <div className={'detail'}>
      {
        queue.events && <div>
          <div className='sub-title'>Events</div>
          {
            queue.events.map((ev, i) => {
              return <div key={i} className='event'>
                {formateDate(ev.date)} : <span>{ev.name}</span>
                {ev.msg && <div>{ev.msg}</div>}
              </div>
            })
          }
        </div>
      }
      {
        children
      }
      <div className='actions'>
        {(onStop && queue.status !== 'SUCCESS' && queue.status !== 'FAILED') && <Button size={150} className= 'clear' onClick={onStop}>Stop</Button>}
        {onFollow && <Button size={150} className='underline' color='text' style={{marginLeft: '20px'}} onClick={onFollow}>Follow</Button>}
      </div>
    </div>}
  </ThemeComponent>
}

export default Queue
