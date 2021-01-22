import Head from 'next/head';
import styles from 'styles/Home.module.css';
import ProductView from 'views/ProductView/ProductView';
import Header from 'views/Header/Header';
import Footer from 'views/Footer/Footer';

const Product = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>
      <div className="container">
        <ProductView />
      </div>
    </main>
    <Footer />
  </div>
);

export default Product;
