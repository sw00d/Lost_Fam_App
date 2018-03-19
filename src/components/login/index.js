import { connect } from 'react-redux';
import LoginView from './loginView';
import {reduxForm} from 'redux-form';
import { testEmail, testName, testPassword } from '../../utils';
import { authenticateUser } from '../../store/actions/user_actions';

const validate = (values, field) => {
  const errors = {};
  if (!values.email || !testEmail(values.email)) errors.email = "Requires valid email address";
  if (!values.password || !testPassword(values.password)) errors.password = "Enter a password at least 6 characters";
  if (checkForWhiteSpace(values.password)) errors.password = "Password cannot have whitespace";
  if (checkForWhiteSpace(values.username)) errors.username = "Username cannot have whitespace";
  if (checkForWhiteSpace(values.email)) errors.email = "Email cannot have whitespace";
  return errors;
}

const mapStateToProps = (state) => {
  return { validate }
}

const Login = connect(mapStateToProps, { authenticateUser })(LoginView);

export default reduxForm({
  validate: validate,
  destroyOnUnmount: true,
  form: 'login'
})(Login);
