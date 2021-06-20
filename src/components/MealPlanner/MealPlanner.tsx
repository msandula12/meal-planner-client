import './MealPlanner.scss';

function MealPlanner() {
  const updateInput = () => {};

  return (
    <div className="container dashboard">
      <header>
        <nav className="nav">
          <span className="logo">MealPlanner</span>
          <span>
            Welcome, Mike!
            <i className="icon fa fa-cog"></i>
            <i className="icon fa fa-sign-out"></i>
          </span>
        </nav>
      </header>
      <div className="main">
        <section className="schedule">
          <div className="day-of-week">Mon</div>
          <div className="day-of-week">Tue</div>
          <div className="day-of-week">Wed</div>
          <div className="day-of-week">Thu</div>
          <div className="day-of-week">Fri</div>
          <div className="day-of-week">Sat</div>
          <div className="day-of-week">Sun</div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 14</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 15</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 16</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 17</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day calendar-day-current">
            <p className="calendar-day-date is-today">Today</p>
            <div className="calendar-meals">
              <textarea
                className="meal breakfast"
                readOnly
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book."
              />
              <textarea
                className="meal lunch"
                readOnly
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book."
              />
              <textarea
                className="meal dinner"
                readOnly
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book."
              />
            </div>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 19</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 20</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 21</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 22</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 23</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 24</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 25</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 26</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
          <div className="calendar-day">
            <p className="calendar-day-date">June 27</p>
            <ul className="calendar-meals">
              <li className="meal placeholder">n/a</li>
              <li className="meal lunch">Sandwich</li>
              <li className="meal dinner">Burger</li>
            </ul>
          </div>
        </section>
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
      </div>
    </div>
  );
}

export default MealPlanner;
