import { connect } from 'react-redux';
import LoginView from './loginView';
import {reduxForm} from 'redux-form';
import { testPassword, checkForWhiteSpace } from '../../utils';
import { authenticateUser } from '../../store/actions/user_actions';

const validate = (values, field) => {
  console.log(values, field);
  const errors = {};
  if (!values.email) errors.email = "Enter your Email";
  if (!values.password ) errors.password = "Enter your password";
  if (checkForWhiteSpace(values.password)) errors.password = "Password cannot have whitespace";
  if (checkForWhiteSpace(values.email)) errors.email = "Email cannot have whitespace";
  return errors;
}

const mapStateToProps = (state) => {
  const syncErrors = state.form.login.syncErrors;
  const token = state.user.token;
  return { validate, syncErrors, token }
}

const Login = connect(mapStateToProps, { authenticateUser })(LoginView);

export default reduxForm({
  validate,
  destroyOnUnmount: true,
  form: 'login'
})(Login);
