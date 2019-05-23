import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  releaseDate: {
    color: '#a6a6a6',
    fontSize: '13px',
    marginTop: '8px'
  }
}

function formatDate (releaseDate) {
  const inputFormat = 'YYYY-MM-DD'
  const outputFormat = 'MMM, Do, YYYY'

  const date = moment(releaseDate, inputFormat)
  return date.format(outputFormat)
}

const ReleaseDate = ({ releaseDate, classes }) => (
  <Typography variant='subtitle1' className={classes.releaseDate}>Relase: {formatDate(releaseDate)}</Typography>
)

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ReleaseDate)
