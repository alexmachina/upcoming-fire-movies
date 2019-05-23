import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    backgroundColor: '#252525',
    display: 'flex',
    justifyContent: 'center',
    margin: '24px',
    maxWidth: '720px'
  },

  title: {
    fontSize: '24px',
    color: '#fff',
    fontWeight: 'bolder'
  },

  posterContainer: {
    marginTop: '16px'
  },

  genres: {
    marginTop: '12px'
  },

  detailsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  },

  overview: {
    display: 'block',
    color: '#a6a6a6',
    fontFamily: 'arial',
    fontSize: '15px'
  }
})

export default withStyles(styles)
