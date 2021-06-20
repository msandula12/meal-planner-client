import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import updateLocale from 'dayjs/plugin/updateLocale';

import { getMockSchedule } from '../../mockData/mockData';

import ScheduleDay from './ScheduleDay';

import './Schedule.scss';

dayjs.extend(updateLocale);
dayjs.extend(localeData);

dayjs.updateLocale('en', {
  weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
});

function Schedule() {
  const schedule = getMockSchedule();
  const weekdays = dayjs.localeData().weekdaysShort();

  return (
    <section className="schedule">
      {weekdays.map((day) => (
        <div key={day} className="day-of-week">
          {day}
        </div>
      ))}
      {schedule.map((day) => (
        <ScheduleDay key={day.day} day={day} />
      ))}
    </section>
  );
}

export default Schedule;
