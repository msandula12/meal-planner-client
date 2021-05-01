import { FC } from 'react';
import moment from 'moment';
import { Card, Typography } from '@material-ui/core';

import { Day } from '../../../constants/interfaces';
import { MOCK_SCHEDULE } from '../../../mockData/mockData';

import useStyles from './styles';

type Props = {
  setSelectedDay: (day: Day) => void;
}

const Schedule: FC<Props> = ({ setSelectedDay }) => {
  const classes = useStyles();

  const editDay = (day: Day): void => {
    setSelectedDay(day);
  };

  return (
    <Card raised className={classes.root} >
      <Typography variant='h6'>
        Plan your meals for the next two weeks
      </Typography>
      <div className={classes.schedule}>
        {MOCK_SCHEDULE.map(day => (
          <div key={day.day.toLocaleDateString()} onClick={() => editDay(day)}>
            <Typography variant='h2'>{moment(day.day).format('dd')[0]}</Typography>
          </div>            
        ))}
      </div>
    </Card>
  )
}

export default Schedule
