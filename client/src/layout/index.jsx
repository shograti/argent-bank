import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
