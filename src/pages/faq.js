import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer";

const Faq = () => (
  <div className={styles.container}>
    <Head>
      <title>FAQ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className={styles.main}>
                Faq
    </main>
    <Footer/>
  </div>
)

export default Faq;
