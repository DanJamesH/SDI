import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EcoTwoToneIcon from '@material-ui/icons/EcoTwoTone';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  let history = useHistory();

  function handleClick(param) {
    history.push(param);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{backgroundColor:"#61dafb", height:'7vh'}}>
            <div style={{display:'flex', flexDirection:'row', width:'100%', }}>
                <div style={{display:'flex', flexDirection:'row', flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                  <EcoTwoToneIcon style={{ fontSize: '5vh', color: "#4caf50", marginRight:'1vw' }}/>
                  <Typography variant="h6">
                      UCT Renewable Energy SDI
                  </Typography>
                </div>
                <div style={{display:'flex', flex:1, justifyContent:'flex-start', alignItems:'center'}}>
                    
                </div>
                <div style={{display:'flex', flex:1, justifyContent:'flex-start', alignItems:'center'}}>
                    <Button color="inherit" style={{marginRight:15}} onClick={() => handleClick('/')}>Home</Button>
                    <Button color="inherit" style={{marginRight:15}} onClick={() => handleClick('/Documents')}>Documents</Button>
                    <Button color="inherit" style={{marginRight:15}} onClick={() => handleClick('/Report')}>Report</Button>
                </div>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}