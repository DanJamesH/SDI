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
import EcoTwoToneIcon from '@material-ui/icons/EcoTwoTone';
import PolicyIcon from '@material-ui/icons/Policy';
import PublicIcon from '@material-ui/icons/Public';

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
        <Typography variant='h5' style={{ marginTop: 10, marginBottom: 10 }}>
          {dataset.title}
        </Typography>
        <ListItem style={{ padding: 0, marginBottom: 10 }}>
          <ListItemAvatar>
            <Avatar>
              <StorageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={dataset.metadata.Owner} secondary={dataset.metadata.Date} />
        </ListItem>
        <Typography variant='h6' style={{ padding: 0, marginBottom: 10 }}>
          Summary
        </Typography>
        <Grid direction="column" container justify="center" alignItems="center">
          <Typography
            gutterBottom
            variant='body2'
          >
            {dataset.metadata.Abstract}
          </Typography>
        </Grid>

      </div>

      <div style={{ flex: 1 }}>
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
            <ListItemText primary={dataset.metadata.End} secondary="Date updated" />
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
    </div>}
  </div>
  )
}

export default DrawerContent