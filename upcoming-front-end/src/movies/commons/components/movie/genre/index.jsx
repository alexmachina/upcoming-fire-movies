import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from './styles'

const Genre = ({ name, big, classes }) => (
  <Grid container className={classes.root}>
    <Typography
      variant='h4'
      className={`${classes.name} ${big && classes.big}`}
    >{name}</Typography>
  </Grid>
)

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  big: PropTypes.bool
}

Genre.defaultProps = {
  big: false
}

export default styled(Genre)
