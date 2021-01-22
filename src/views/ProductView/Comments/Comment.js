import P from 'prop-types';

const Comment = ({ comment }) => (
  <div>
    <h4>{comment.author}</h4>
    <div>{comment.content}</div>
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
