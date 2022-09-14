import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import "./Navbar.css";

const Navbar = () => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  console.log(isLogged);

  const history = useHistory();

  // /login - /register

  return (
    <div className="navbar">
      <nav>
        <ul className="nav-visitor">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="">About us</Link>
          </li>
          <li>
            <Link to="/feedbacks">Feedbacks</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        {isLogged ? (
          <ul className="nav-user">
            <h3>User Avatar</h3>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/routines">My Routines</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/">Sign-out</Link>
            </li>
          </ul>
        ) : (
          <button className="btn-in" onClick={() => history.push("/login")}>
            Sign-in
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
