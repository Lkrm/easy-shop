import P from 'prop-types';

import CommentsField from './CommentsField';
import Comment, { CommentType } from './Comment';
import styles from './Comments.module.sass';

const Comments = ({ comments = [] }) => (
  <div className={styles.container}>
    <CommentsField />
    {!comments.length ? (
      <div className={styles.notFound}>Not found comments yet!</div>
    ) : (
      <div className={styles.title}>Comments:</div>
    )}
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);

Comments.propTypes = {
  comments: P.arrayOf(CommentType),
};

export default Comments;
