import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: '1rem',
    marginBottom: '2rem',
  },
  schedule: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },
}));
