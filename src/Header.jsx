import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <h1>Logo</h1>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/reigster">Sign up</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
