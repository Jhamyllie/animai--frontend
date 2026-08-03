const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">AnimAi</h1>

      <ul className="navbar__menu">
        <a href="">
        <li>Home</li>
        </a>

        <a href="">
        <li>Populares</li>
        </a>

        <a href="">
        <li>Favoritos</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;