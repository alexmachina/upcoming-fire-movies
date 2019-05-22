import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
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
});

export default withStyles(styles);
