import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import UpdateIcon from '@material-ui/icons/Update';
import StorageIcon from '@material-ui/icons/Storage';
import CategoryIcon from '@material-ui/icons/Category';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import PolicyIcon from '@material-ui/icons/Policy';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';

const drawerWidth = '20vw';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const DrawerContent = ({
  dataset,
  loading
}) => {
  const classes = useStyles();

  return (
    <div> {loading ? <div style={{display:'flex', flex:1, height:'93vh', justifyContent:'center', alignItems:'center'}}><CircularProgress /></div> : <div className={classes.drawerContainer}>
      <div style={{ height: '33vh', padding: '1vw' }}>
        <Typography variant='h5' style={{ marginTop: '1vh', marginBottom: '1vh' }}>
          {dataset.title}
        </Typography>
        <ListItem style={{ padding: 0, marginBottom: '1vh' }}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={dataset.metadata.Owner} secondary={dataset.metadata.Date} />
        </ListItem>
        <Typography variant='h6' style={{ padding: 0, marginBottom: 10 }}>
          Summary
        </Typography>
        <Grid direction="column" container style={{height:'17vh', overflow: 'auto', width:'16vw'}}>
          <Typography
            gutterBottom
            variant='body2'
          >
            {dataset.metadata.Abstract}
          </Typography>
        </Grid>

      </div>

      <div style={{ height:'43vh', overflow: 'auto', width:'17vw', marginTop:'5vh' }}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <StorageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataset.metadata.Type} secondary="Type" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <InfoIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataset.metadata.Date} secondary="Info updated" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <UpdateIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataset.metadata.End} secondary="Data updated" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CategoryIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataset.metadata.Category} secondary="Category" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PublicIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataset.metadata["Spatial Reference System Identifier"]} secondary="Spatial Reference System Identifier" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PolicyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataset.metadata.Restrictions} secondary="Restrictions Information" />
          </ListItem>
        </List>
      </div>
      <div style={{display:'flex', flex:1, justifyContent:'center', marginTop:'4vh'}}>
        <Button variant="outlined" color="primary" style={{width:'12vw'}} onClick={() => window.open("https://drive.google.com/drive/folders/1JBUs7ZU3U196K0zrO4YfEVsJhyqUNwxj?usp=sharing", "_blank")}>
          Download data
        </Button>
      </div>
    </div>}
  </div>
  )
}

export default DrawerContent