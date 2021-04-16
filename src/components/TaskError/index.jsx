import { connect } from 'react-redux';
import * as TaskActionCreators from '../../actions/taskCreators';
import styles from './TaskError.module.scss';

const TaskError = props => {
  const { closeTaskErrorAction,error } = props;
  return (
    <div className={styles.error}>
      <span>Error! {error.message}</span>
      <button className={styles.deleteBtn} onClick={closeTaskErrorAction}>
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  closeTaskErrorAction: () => dispatch(TaskActionCreators.closeTaskError()),
});

export default connect(null, mapDispatchToProps)(TaskError);
