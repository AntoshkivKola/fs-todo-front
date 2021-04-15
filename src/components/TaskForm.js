import { Formik, Form, Field } from 'formik';
import * as TaskActionCreator from '../actions/taskCreators';
import { connect } from 'react-redux';

const TaskForm = props => {
  const { createTaskAction } = props;
  const onSubmit = (values, formikBag) => {
    console.log('TaskForm',values);
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
      <Form>
        <Field name='body' placeholder='body task' />
        {/* <Field name='deadline' type='date' /> */}
        <button type='submit'>Create Task</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTaskAction: values =>
    dispatch(TaskActionCreator.createTaskRequest({ values })),
});

export default connect(null, mapDispatchToProps)(TaskForm);
