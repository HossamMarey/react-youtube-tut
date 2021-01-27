const Header = () => {
  return (
    <header className="container">
      <nav className="navbar ">
        <h1>Codv Blog</h1>
        <div className="links">
          <a href="/"> Home </a>
          <a href="/create" className="btn">
            New Post
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
