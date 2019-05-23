import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  movie: {
    display: 'flex',
    justifyContent: 'center'
  },

  list: {
    margin: '24px'
  },

  title: {
    color: '#fff'
  },
  poster: {
    display: 'flex',
    justifyContent: 'center'
  }
})

export default withStyles(styles)
