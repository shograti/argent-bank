import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfile, login } from "../../../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Card() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(login({ email, password })).then((result) => {
        dispatch(getProfile(result.payload));
        navigate("/profile");
      });
    } catch (error) {
      console.log("Login error:", error);
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
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
