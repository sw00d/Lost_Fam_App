import { connect } from 'react-redux';
import signUpView from './signUpView';
import {reduxForm} from 'redux-form';
import { testEmail } from '../../utils';
import { createUser } from '../../store/actions/user_actions';

const validate = values => {
  const errors = {};
  if (!values.email || !testEmail(values.email)) errors.email = "Requires valid email address";
  if (!values.name) errors.name = "Please enter you name";
  if (!values.password) errors.password = "Requires a password";
  if (!values.confirmPass) errors.confirmPass = "Confirm your password";
  if (values.password !== values.confirmPass) {
    errors.password = "Entered passwords must match"
    errors.confirmPass = "Entered passwords must match"
  }
  return errors;
}

const mapStateToProps = (state) => {
  return { validate }
}

const SignUp = connect(mapStateToProps, { createUser })(signUpView);

export default reduxForm({
  validate,
  destroyOnUnmount: true,
  form: 'register'
})(SignUp);
