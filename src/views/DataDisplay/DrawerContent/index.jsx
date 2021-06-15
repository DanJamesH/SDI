import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EcoTwoToneIcon from '@material-ui/icons/EcoTwoTone';

const drawerWidth = '20vw';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
      display:'flex',
      flexDirection:'column',
    },
  }));

const DrawerContent = () => {
    const classes = useStyles();

    return (
        <div className={classes.drawerContainer}>
          <div style={{height:'30vh',padding:'1vw'}}>
            <Typography variant='h5' style={{marginTop:10, marginBottom:10}}>
                Layer name
            </Typography>
            <ListItem style={{padding:0, marginBottom:10}}>
                <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Data set creator" secondary="Jan 9, 2014" />
            </ListItem>
            <Typography variant='h6' style={{padding:0, marginBottom:10}}>
                Summary
            </Typography>
            <Grid direction="column" container justify="center" alignItems="center">
                <Typography
                    gutterBottom
                    variant='body2'
                >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
                </Grid>
            
          </div>
          
          <div style={{flex:1, backgroundColor:"#0000ff"}}>
          <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
          </div>
        </div>
    )
}

export default DrawerContent