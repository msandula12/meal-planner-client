import dayjs from 'dayjs';

import { Day } from 'constants/interfaces';

import ScheduleDay from './ScheduleDay';

import './Schedule.scss';

type Props = {
  schedule: Day[];
  selectedDay: Day | undefined;
  setSelectedDay: (day: Day) => void;
};

function Schedule({ schedule, selectedDay, setSelectedDay }: Props) {
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
          setSelectedDay={setSelectedDay}
        />
      ))}
    </section>
  );
}

export default Schedule;
