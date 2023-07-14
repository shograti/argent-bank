import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const handleSignInOrProfileNavigation = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" onClick={handleHomeNavigation} />
      <nav>
        <div className={styles.item} onClick={handleSignInOrProfileNavigation}>
          <FaUserCircle className={styles.icon} />
          <p>{user ? user.firstName : "Sign In"}</p>
        </div>
        {user ? (
          <div className={styles.item} onClick={handleLogout}>
            <FaSignOutAlt className={styles.icon} />
            <p>Sign Out</p>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;
