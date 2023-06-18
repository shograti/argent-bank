import styles from "./styles.module.css";
import Layout from "../../layout";
import Account from "./components/Account";

function Profile() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Welcome back Tony Jarvis!</h1>
          <button>Edit Name</button>
        </div>
        <div className={styles.accounts_container}>
          <Account
            balance={2082.79}
            title="Argent Bank Checking (x8349)"
            description="Available balance"
          />
          <Account
            balance={10928.42}
            title="Argent Bank Savings (x6712)"
            description="Available balance"
          />
          <Account
            balance={184.3}
            title="Argent Bank Credit Card (x8349)"
            description="Current Balance"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
