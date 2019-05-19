import React from 'react'; 
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  app_bar: {
    backgroundColor: '#a2a2a2',
    height: '48px',
  }
}

const TopBar = ({ classes }) => (
  <AppBar position="fixed" className={classes.app_bar}>
  </AppBar>
);

export default withStyles(styles)(TopBar);
