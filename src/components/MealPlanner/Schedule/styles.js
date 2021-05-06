import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: '1rem',
  },
  schedule: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    border: '1px solid #ddd',
    backgroundColor: '#ddd',
    gridGap: '1px',
  },
  dayOfWeek: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
  notice: {
    alignItems: 'center',
    backgroundColor: 'rgb(232, 244, 253)',
    borderRadius: '0.25rem',
    display: 'flex',
    marginTop: '1rem',
    padding: '0.5rem 1rem',
  },
}));
