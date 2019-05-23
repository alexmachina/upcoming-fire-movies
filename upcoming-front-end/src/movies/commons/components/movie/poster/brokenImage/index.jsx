import React from 'react'
import PropTypes from 'prop-types'
import BrokenImageIcon from '@material-ui/icons/BrokenImage'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: '140px',
    border: '2px solid #a6a6a6',
    backgroundColor: '#969696'
  },
  icon: {
    color: '#fff',
    fontSize: '32px'
  }
})

const BrokenImage = ({ classes }) => (
  <div className={classes.root}>
    <BrokenImageIcon className={classes.icon} />
  </div>
)

BrokenImage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BrokenImage)
