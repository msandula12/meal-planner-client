import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  meal: {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: ({ mealType }) =>
      mealType === 'breakfast'
        ? 'hsl(0, 80%, 95%)'
        : mealType === 'lunch'
        ? 'hsl(120, 80%, 95%)'
        : 'hsl(240, 80%, 95%)',
    '&:not(:last-of-type)': {
      marginBottom: '0.5rem',
    },
  },
}));
