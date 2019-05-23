import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const Loader = ({ classes }) => (
  <Grid className={classes.container} container justify='center'>
    <CircularProgress color='secondary' />
  </Grid>
)

const styles = {
  container: {
    margin: '24px 0'
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loader)
