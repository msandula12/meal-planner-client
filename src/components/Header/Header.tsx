import './Header.scss';

function Header() {
  return (
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
  );
}

export default Header;
