import { FC } from 'react';
import { Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';

import { Meal } from '../../../../constants/interfaces';

type Props = {
  meal: Meal;
}

const MealForm: FC<Props> = ({ meal }) => {
  return (
    <Grid item sm={4} xs={12}>
      <Card>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {meal.type.toUpperCase()}
          </Typography>
          <TextField fullWidth label='Meal' margin='dense' value={meal.name} variant='outlined' />
          {/* <TextField fullWidth label='URL' margin='dense' value={meal.url} variant='outlined' /> */}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MealForm;