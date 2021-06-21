import dayjs from 'dayjs';

import { Day } from '../../constants/interfaces';

import ScheduleDay from './ScheduleDay';

import './Schedule.scss';

type Props = {
  schedule: Day[];
  selectedDay: Day | undefined;
};

function Schedule({ schedule, selectedDay }: Props) {
  return (
    <section className="schedule">
      {schedule.slice(7).map((day) => {
        const dayOfWeek = dayjs(day.day).format('ddd');
        return (
          <div key={dayOfWeek} className="day-of-week">
            {dayOfWeek}
          </div>
        );
      })}
      {schedule.map((day) => (
        <ScheduleDay
          key={day.day}
          day={day}
          isSelected={day.day === selectedDay?.day}
        />
      ))}
    </section>
  );
}

export default Schedule;
