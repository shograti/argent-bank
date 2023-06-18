import Layout from "../../layout";
import Card from "./components/Card";
import styles from "./styles.module.css";

function SignIn() {
  return (
    <Layout>
      <main className={styles.content}>
        <Card />
      </main>
    </Layout>
  );
}

export default SignIn;
