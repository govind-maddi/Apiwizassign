import React, { createContext, useEffect, useState } from 'react';

import '../styles/notify.css';

export const NotifyMsg = createContext();
export const SetNotifyMsg = createContext();

function Notify( { children } ) {

  const [ notifymsg,setNotifyMsg ] = useState([]);
  const [ notification,setNotification ] = useState(false);

  const handleNotification = () => {
    setNotification(false);
  }

  useEffect(() => {
    if(notifymsg.length === 2)
      setNotification(true);
  },[ notifymsg ])

  return (
    <>
      <div className='notify_cont' id={ notification ? 'notify_cont_movedown' : 'notify_cont_moveup' }>
        <header style={ notifymsg[1] === 'error' ? { color:'#DC143C' } : { color:'#64dc14' } }>
          {
            notifymsg[0]
          }
        </header>
        <span onClick={handleNotification}>x</span>
    </div>

      <NotifyMsg.Provider value={notifymsg}>
        <SetNotifyMsg.Provider value={setNotifyMsg}>

          { children }

        </SetNotifyMsg.Provider>
      </NotifyMsg.Provider>
    </>
  )
}

export default Notify