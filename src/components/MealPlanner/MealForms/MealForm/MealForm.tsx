import { FC } from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

import { Meal } from '../../../../constants/interfaces';

type Props = {
  meal: Meal;
}

const MealForm: FC<Props> = ({ meal }) => {
  return (
    <Grid item>
      <Card>
        <Typography variant='h6'>
          {meal.type.toUpperCase()}
        </Typography>

      </Card>
    </Grid>
  )
}

export default MealForm;