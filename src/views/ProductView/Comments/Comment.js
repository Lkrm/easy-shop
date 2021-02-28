import P from 'prop-types';

import styles from './Comment.module.sass';

const Comment = ({ comment }) => (
  <div className={styles.container}>
    <b className={styles.author}>{comment.author}</b>
    <div className={styles.content}>{comment.content}</div>
  </div>
);

export const CommentType = P.shape({
  id: P.number,
  author: P.string,
  content: P.string,
});

Comment.propTypes = {
  comment: CommentType,
};

export default Comment;
