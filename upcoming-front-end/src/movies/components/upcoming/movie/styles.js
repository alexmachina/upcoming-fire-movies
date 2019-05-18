import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  poster: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '12px',
  }
});

export default withStyles(styles);
