import P from 'prop-types';

import styles from './CommentsField.module.sass';

const CommentsField = ({ value, onChange, onSend }) => (
  <form onSubmit={onSend} className={styles.container}>
    <textarea onChange={onChange} value={value} className={styles.field} cols="30" rows="10" />
    <button type="button" className={`button ${styles.submitButton}`}>
      Send
    </button>
  </form>
);

CommentsField.propTypes = {
  value: P.string.isRequired,
  onChange: P.func.isRequired,
  onSend: P.func.isRequired,
};

export default CommentsField;
