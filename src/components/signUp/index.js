import { connect } from 'react-redux';
import signUpView from './signUpView';
import { reduxForm } from 'redux-form';
import { testEmail, testName, testPassword, checkForWhiteSpace } from '../../utils';
import { createUser } from '../../store/actions/user_actions';


const validate = (values, field) => {
  const errors = {};
  if (!values.email || !testEmail(values.email)) errors.email = "Requires valid email address";
  if (!values.name || !testName(values.name)) errors.name = "Please enter your name";
  if (!values.password || !testPassword(values.password)) errors.password = "Must be more than 6 characters";
  if (!values.confirmPass) errors.confirmPass = "Confirm your password";
  if (values.password !== values.confirmPass && values.confirmPass != undefined) {
      errors.confirmPass = "Passwords must match";
  }
  if (checkForWhiteSpace(values.password)) errors.password = "Password cannot have whitespace";
  if (checkForWhiteSpace(values.username)) errors.username = "Username cannot have whitespace";
  if (checkForWhiteSpace(values.email)) errors.email = "Email cannot have whitespace";
  // console.log(errors);
  return errors;
}

const mapStateToProps = (state) => {
  return { validate }
}


const SignUp = connect(mapStateToProps, {createUser})(signUpView);

export default reduxForm({
  validate,
  destroyOnUnmount: true,
  form: 'register',
})(SignUp);
