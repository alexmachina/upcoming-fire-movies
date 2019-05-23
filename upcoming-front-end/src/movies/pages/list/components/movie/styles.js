import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  title: {
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    fontFamily: 'Roboto'
  },

  genres: {
    marginTop: '12px',
    display: 'inline-flex'
  }
})

export default withStyles(styles)
