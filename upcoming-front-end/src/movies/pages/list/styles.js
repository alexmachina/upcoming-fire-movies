import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  movies_container: {
    paddingTop: '44px'
  },

  form: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },

  input: {
    width: '50%',
    borderBottom: '1px solid white',
    color: 'white',
    marginTop: '16px',
    marginRight: '16px'
  },

  button: {
    marginTop: '16px',
    backgroundColor: '#fff',
    color: '#242424',
    '&:hover': {
      backgroundColor: '#666666',
      color: 'white'
    }
  }
})

export default withStyles(styles)
