import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

import { Day } from '../../constants/interfaces';
import { formatDate } from '../../utils/helpers';

import './DayPlanner.scss';

type Props = {
  selectedDay: Day | undefined;
};

function DayPlanner({ selectedDay }: Props) {
  if (!selectedDay) {
    return <section className="container day-planner">No day selected</section>;
  }
  const updateInput = () => {};

  return (
    <section className="container day-planner">
      <div className="day-planner-header">
        <BiCaretLeft className="icon day-selector-icon" />
        <span className="day-planner-day">{formatDate(selectedDay.day)}</span>
        <BiCaretRight className="icon day-selector-icon" />
      </div>
      <div className="day-planner-meals">
        {selectedDay.meals.map((meal) => (
          <div key={meal.type} className="input-group">
            <label className="input-label" htmlFor="breakfast">
              {meal.type}
            </label>
            <input
              className="text-input"
              onChange={updateInput}
              type="text"
              value={meal.name}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-primary">Save</button>
    </section>
  );
}

export default DayPlanner;
