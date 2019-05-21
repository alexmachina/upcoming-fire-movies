import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: 'auto',
    display: 'flex',
    backgroundColor: '#5f5f5f',
    padding: '2px 4px',
    marginRight: '8px',
    marginBottom: '8px',
    borderRadius: '4px',

  },
  name: {
    display: 'flex',
    color: '#fff',
    fontSize: '12px',
  },
});

export default withStyles(styles);
