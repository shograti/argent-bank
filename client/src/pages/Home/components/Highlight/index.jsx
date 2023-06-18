import styles from "./styles.module.css";
import PropTypes from "prop-types";

function HighLight({ icon, alt, title, description }) {
  return (
    <div className={styles.highlight}>
      <img src={icon} alt={alt} />
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
    </div>
  );
}

HighLight.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HighLight;
