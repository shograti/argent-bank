import styles from "./styles.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.strong_text_container}>
          <p>No fees.</p>
          <p>No minimum deposit.</p>
          <p>High interest rates.</p>
        </div>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
}

export default Hero;
