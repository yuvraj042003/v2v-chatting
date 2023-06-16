import React, {useContext} from 'react'
import {Button} from "@mui/material"
//#################Unused file are start ###########
import {SocketContext} from "../Context"

//#################Unused file are end  ###########
const Notifications = () => {
  console.log(useContext(SocketContext))
  const {answerCall, call, callAccepted} = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.name} is calling:</h1>
            <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  )
}

export default Notifications
