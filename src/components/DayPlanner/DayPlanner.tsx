import './DayPlanner.scss';

function DayPlanner() {
  const updateInput = () => {};

  return (
    <section className="container day">
      <div className="selected-day-container">
        <i className="icon fa fa-chevron-left"></i>
        <span className="selected-day">Today</span>
        <i className="icon fa fa-chevron-right"></i>
      </div>
      <div className="meals">
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
