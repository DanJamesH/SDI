import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Map from './Map'
import DrawerContent from './DrawerContent';
import { useLocation } from 'react-router-dom'
import data from '../../assets/data.json'

const drawerWidth = '18vw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height:'93vh',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    display:'flex',
    flexDirection:'column',
  },
  content: {
    flexGrow: 1,
  },
}));

export default function DataDisplay() {
  const classes = useStyles();

  const location = useLocation();

  const [loading, setIsLoading] = useState(true)
  const [dataset, setDataset] = useState(null)

  useEffect(() => {
    const requiredData = data.data.find(element => element.pathname === location.pathname)
    setDataset(requiredData)
    setIsLoading(false)
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <DrawerContent 
          dataset={dataset}
          loading={loading}
        />
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {loading ? 
          <div style={{display:'flex', height:'93vh', justifyContent:'center', alignItems:'center'}}>
            <CircularProgress />
          </div> : 
            <Map
              dataset={dataset}
            /> 
        }
      </main>
    </div>
  );
}
