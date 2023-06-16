
import './App.css';
import {Typography, AppBar} from "@mui/material"
import { makeStyles } from '@mui/styles';


import VideoPlayer2 from "../../../videocall/client/src/componants/VideoPlayer";
import Notifications from "../../../videocall/client/src/componants/Notifications";
import Options2 from "../../../videocall/client/src/componants/Options";
//#####################################STYLE-CSS-START############################################
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',
    
  },
  
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
//#####################################STYLE-CSS-END############################################

function App() {
  const classess = useStyles();
  return (
    <>
    <div className={classess.wrapper}>
    <AppBar className={classess.appBar} position="static" color="inherit">
      <Typography variant='h2' align='center'>V2V-Chat</Typography>
    </AppBar>
    

    <VideoPlayer2 />
    <Options2>
      <Notifications />
    </Options2>
    </div>
    </>
  );
}

export default App;
