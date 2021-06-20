import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

import './DayPlanner.scss';

function DayPlanner() {
  const updateInput = () => {};

  return (
    <section className="container day-planner">
      <div className="day-planner-header">
        <BiCaretLeft className="icon day-selector-icon" />
        <span className="day-planner-day">Today</span>
        <BiCaretRight className="icon day-selector-icon" />
      </div>
      <div className="day-planner-meals">
        <div className="input-group">
          <label className="input-label" htmlFor="breakfast">
            Breakfast
          </label>
          <input
            className="text-input"
            onChange={updateInput}
            type="text"
            value="Smoothie"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="lunch">
            Lunch
          </label>
          <input
            className="text-input"
            onChange={updateInput}
            type="text"
            value="Tuna"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="dinner">
            Dinner
          </label>
          <input
            className="text-input"
            onChange={updateInput}
            type="text"
            value="Brats"
          />
        </div>
      </div>
      <button className="btn btn-primary">Save</button>
    </section>
  );
}

export default DayPlanner;
