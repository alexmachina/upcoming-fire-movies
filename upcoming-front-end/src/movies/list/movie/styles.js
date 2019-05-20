import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  poster: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '14px',
  },

  release_date: {
    color: '#a6a6a6',
    fontSize: '13px',
    marginTop: '4px',
  },
});

export default withStyles(styles);
