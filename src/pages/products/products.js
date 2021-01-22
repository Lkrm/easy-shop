import Head from 'next/head';
import styles from 'styles/Home.module.css';
import ProductsView from 'views/ProductsView/ProductsView';
import Header from 'views/Header/Header';
import Footer from 'views/Footer/Footer';

const Products = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>
      <div className="container">
        <ProductsView />
      </div>
    </main>
    <Footer />
  </div>
);

export default Products;
