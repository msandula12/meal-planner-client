import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  day: {
    padding: '1rem',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#eee',
      cursor: 'pointer',
    },
  },
  meal: {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: 'hsl(240, 80%, 95%)',
    '&:not(:last-of-type)': {
      marginBottom: '0.5rem',
    },
    '&.breakfast': {
      backgroundColor: 'hsl(0, 80%, 95%)',
    },
    '&.lunch': {
      backgroundColor: 'hsl(120, 80%, 95%)',
    },
    '&.dinner': {
      backgroundColor: 'hsl(240, 80%, 95%)',
    },
  },
}));
