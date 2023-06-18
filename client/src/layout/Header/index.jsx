import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const handleSignInOrProfileNavigation = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/sign-in");
    }
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" onClick={handleHomeNavigation} />
      <nav>
        <div className={styles.item} onClick={handleSignInOrProfileNavigation}>
          <FaUserCircle className={styles.icon} />
          <p>{isLoggedIn ? "Tony" : "Sign In"}</p>
        </div>
        {isLoggedIn ? (
          <div className={styles.item} onClick={handleLogout}>
            <FaSignOutAlt className={styles.icon} />
            <p>Sign Out</p>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default Header;
