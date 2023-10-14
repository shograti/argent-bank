import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, login } from "../../../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Card() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isError } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ email, password })).unwrap();
      console.log(result);
      await dispatch(getProfile(result)).unwrap();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <FaUserCircle className={styles.icon} />
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.input_container}>
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.terms_agreements}>
          <input required type="checkbox" id="terms-agreements" />
          <label htmlFor="terms-agreements">Remember me</label>
        </div>
        <button disabled={isLoading}>Sign In</button>
        {isError && (
          <p className={styles.error_message}>
            Something went wrong, please try again later
          </p>
        )}
      </form>
    </div>
  );
}

export default Card;
