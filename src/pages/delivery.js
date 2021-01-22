import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer";

const Delivery = () => (
  <div className={styles.container}>
    <Head>
      <title>Delivery information</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className={styles.main}>
                Delivery
    </main>
    <Footer/>
  </div>
)

export default Delivery;
