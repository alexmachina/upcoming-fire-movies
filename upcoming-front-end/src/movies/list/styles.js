import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#252525',
    padding: '24px',
  },

  movies_container: {
    paddingTop: '44px',
  },

  title: {
    color: '#fff',
    fontSize: '36px',
  },

  linkHome: {
    textDecoration: 'none',
  },

  fireIcon: {
    color: 'orange',
    marginLeft: '4px',
    marginRight: '8px',
  },

  starIcon: {
    color: 'yellow',
    margin: '0 8px',
  },

  form: {
    width: '100%',
    justifyContent:'center',
    display: 'flex',
    flexWrap: 'wrap'
  },

  input: {
    width: '50%',
    borderBottom: '1px solid white',
    color: 'white',
    marginTop: '16px',
    marginRight: '16px',
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
});

export default withStyles(styles);
