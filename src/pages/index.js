import Head from 'next/head';
import styles from 'styles/Home.module.css';
import ProductsView from 'views/ProductsView/ProductsView';
import Header from 'views/Header/Header';
import Footer from 'views/Footer/Footer';

const Product = () => (
  <div className={styles.container}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>
      <section>
        <div className="container">
          <ProductsView />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Product;
