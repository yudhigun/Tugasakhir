import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>TelHo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/room">Rooms</Link>
        </li>
        <li>
          <Link to="/checkin">Check In</Link>
        </li>
        <li>
          <Link to="/checkout">Check Out</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;