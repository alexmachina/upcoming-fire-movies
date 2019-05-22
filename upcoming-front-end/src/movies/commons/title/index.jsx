import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import WhatsHotIcon from '@material-ui/icons/Whatshot';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import styled from './styles';

const Title = ({ classes }) => (
  <Grid item xs={12} className={classes.title_container}>
    <Link to="/" className={classes.linkHome}>
      <Typography variant="h1" className={classes.title}>
        upcoming <WhatsHotIcon className={classes.fireIcon} />
        movies</Typography>
    </Link>
  </Grid>
);

Title.propTypes = {
  classes: PropTypes.array.isRequired
};

export default styled(Title);
