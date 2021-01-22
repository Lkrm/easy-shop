import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer";

const Contacts = () => (
  <div className={styles.container}>
    <Head>
      <title>Contact us</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className={styles.main}>
                Contact Us
    </main>
    <Footer/>
  </div>
)

export default Contacts;
