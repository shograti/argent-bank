import styles from "./styles.module.css";
import Layout from "../../layout";
import Account from "./components/Account";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editProfile, getProfile } from "../../redux/authSlice";

function Profile() {
  const { user, token, isLoading, isError } = useSelector(
    (state) => state.auth,
  );
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const profileData = { token, user: { firstName, lastName } };
      await dispatch(editProfile(profileData)).unwrap();
      await dispatch(getProfile(token)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>
            Welcome back {user.firstName} {user.lastName}!
          </h1>
          {!isEditingMode ? (
            <button
              onClick={() => setIsEditingMode(true)}
              type="button"
              disabled={isLoading}
            >
              Edit Name
            </button>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input_container}>
                <input
                  required
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={user.firstName}
                />
                <input
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder={user.lastName}
                />
              </div>
              <div className={styles.button_container}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={styles.save_button}
                >
                  Save
                </button>
                <button onClick={() => setIsEditingMode(false)} type="button">
                  Cancel
                </button>
              </div>
              {isError && (
                <p className={styles.error_message}>
                  Something went wrong, please try again later
                </p>
              )}
            </form>
          )}
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
