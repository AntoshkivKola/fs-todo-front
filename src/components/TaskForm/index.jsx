import { Formik, Form, Field } from 'formik';

import * as TaskActionCreator from '../../actions/taskCreators';
import { connect } from 'react-redux';
import styles from './TaskForm.module.scss';

const TaskForm = props => {
  const { createTaskAction } = props;

  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        body: '',
        deadline: null,
      }}
    >
      <Form className={styles.form}>
        <Field
          name='body'
          placeholder='Enter new task...'
          className={styles.input}
        />
        <span className={styles.label}>Set deadline:</span>
        <Field name='deadline' type='datetime-local' className={styles.input} />

        <button className={styles.submitBtn} type='submit'>
          Create Task
        </button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTaskAction: values =>
    dispatch(TaskActionCreator.createTaskRequest({ values })),
});

export default connect(null, mapDispatchToProps)(TaskForm);
