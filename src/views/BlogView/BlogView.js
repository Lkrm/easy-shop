import Link from 'next/link';
import { useState, useEffect } from 'react';
import * as postsApi from 'api/posts';
import { Preloader } from 'components';

import styles from './BlogView.module.sass';

const BlogView = () => {
  const [posts, setPosts] = useState({ data: []});
  const [isPostsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    setPostsLoading(true);
    postsApi.fetchPosts({ limit: 10, offset: 0 })
      .then((data) => {
        setPosts(data);
        setPostsLoading(false);
      })
  },[]);

  return (
    <div className={styles.blogView}>
      <h1>Blog</h1>
      {isPostsLoading && (<Preloader className={styles.preloader} />)}
      <div className={styles.blogList}>
        {
          posts.data.map(({ title, image, intro, id}) => (
            <Link key={id} href={`/posts/${id}`}>
              <a className={styles.blogItem}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div>{intro}</div>
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default BlogView;
