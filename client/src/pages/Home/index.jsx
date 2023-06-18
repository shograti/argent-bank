import styles from "./styles.module.css";
import Layout from "../../layout";
import Hero from "./components/Hero";
import HighLight from "./components/Highlight";
import iconSecurity from "../../assets/icon-security.png";
import iconMoney from "../../assets/icon-money.png";
import iconChat from "../../assets/icon-chat.png";

function Home() {
  return (
    <Layout>
      <main className={styles.content}>
        <Hero />
        <div className={styles.highlights_container}>
          <HighLight
            icon={iconChat}
            alt="relations"
            title="You are our #1 priority"
            description=" Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
          />
          <HighLight
            icon={iconMoney}
            alt="money"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be! "
          />
          <HighLight
            icon={iconSecurity}
            alt="security"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe. "
          />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
