import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer";
import BlogView from 'views/BlogView/BlogView';

const Blog = () => (
  <div className={styles.container}>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className={styles.main}>
      <section>
        <div className='container'>
          <BlogView />
        </div>
      </section>
    </main>
    <Footer/>
  </div>
)

export default Blog;
