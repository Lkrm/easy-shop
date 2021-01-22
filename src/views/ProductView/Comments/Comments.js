import P from 'prop-types';
import CommentsField from './CommentsField';
import Comment, { CommentType } from './Comment';

const Comments = ({ comments }) => (
  <div>
    <CommentsField />
    {!comments.length ? <h2>Not found comments yet!</h2> : <h2>Comments: </h2>}
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);

Comments.propTypes = {
  comments: P.arrayOf(CommentType),
};

export default Comments;
