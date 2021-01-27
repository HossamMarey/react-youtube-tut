const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Codv Blog</h1>
        <div className="links">
          <a href="/"> Home </a>
          <a href="/create"> New Post </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
