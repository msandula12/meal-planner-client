import dayjs from 'dayjs';

import localeData from 'dayjs/plugin/localeData';
import updateLocale from 'dayjs/plugin/updateLocale';

import { getMockSchedule } from '../../mockData/mockData';

import './Schedule.scss';

dayjs.extend(updateLocale);
dayjs.extend(localeData);

dayjs.updateLocale('en', {
  weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
});

function Schedule() {
  const schedule = getMockSchedule();
  const weekdays = dayjs.localeData().weekdaysShort();

  const updateInput = () => {};

  return (
    <section className="schedule">
      {weekdays.map((day) => (
        <div key={day} className="day-of-week">
          {day}
        </div>
      ))}
      {schedule.map((day) => {
        const isToday = dayjs().isSame(day.day, 'day');
        return (
          <div key={day.day} className="calendar-day">
            <p className="calendar-day-date">
              {isToday ? 'Today' : dayjs(day.day).format('MMM DD')}
            </p>
            <div className="calendar-meals">
              {day.meals.map((meal) => (
                <textarea
                  className={`meal ${
                    meal.name.length > 0 ? meal.type : 'placeholder'
                  }`}
                  onChange={updateInput}
                  placeholder="n/a"
                  readOnly
                  title={meal.name}
                  value={meal.name}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Schedule;
