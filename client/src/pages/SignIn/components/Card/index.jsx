import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <FaUserCircle className={styles.icon} />
      <h1>Sign In</h1>
      <form>
        <div className={styles.input_container}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div className={styles.terms_agreements}>
          <input type="checkbox" id="terms-agreements" />
          <label htmlFor="terms-agreements">Remember me</label>
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Card;
