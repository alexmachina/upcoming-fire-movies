import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  }
});

const Image = ({ url, onError, classes }) => (
  <img src={url} onError={onError} className={classes.image} />
);

export default withStyles(styles)(Image);
