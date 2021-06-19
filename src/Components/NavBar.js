import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor:"#BAFFFA"}}>
      <AppBar position="static" style={{backgroundColor:"#BAFFFA"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{padding:"1.5rem",color:"black"}}>
            Stocks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}