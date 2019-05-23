import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

const Image = ({ url, onError, classes }) => (
  <img alt='poster' src={url} onError={onError} className={classes.image} />
)

Image.propTypes = {
  url: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Image)
