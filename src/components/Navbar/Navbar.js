import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <h1>BUYBUY</h1>
        <div className="navbar-menus">
          <button>Login</button>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
