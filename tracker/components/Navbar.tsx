export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">🚆 Smart Local Train Tracker</span>

      <div className="nav-right">
        <a href="#">Home</a>
        <a href="#">Status</a>
        <a href="#">Routes</a>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}
