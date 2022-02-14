import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="container">
      <nav className="navbar ">
        <h1>Codv Blog</h1>
        <div className="links">
          <NavLink
            className={(ndata) => ndata.isActive && "active"}
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(ndata) => ndata.isActive && "active"}
            to="/about"
          >
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
