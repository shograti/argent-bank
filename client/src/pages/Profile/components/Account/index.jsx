import styles from "./styles.module.css";
import PropTypes from "prop-types";

function Account({ balance, title, description }) {
  return (
    <div className={styles.account}>
      <div className={styles.left_section}>
        <p>{title}</p>
        <p>{balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p>{description}</p>
      </div>
      <div className={styles.right_section}>
        <button>View transactions</button>
      </div>
    </div>
  );
}

Account.propTypes = {
  balance: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
