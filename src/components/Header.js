import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="container">
      <nav className="navbar ">
        <h1>Codv Blog</h1>
        <div className="links">
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <Link to="/create" className="btn">
            New Post
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
