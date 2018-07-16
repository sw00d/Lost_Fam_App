import { connect } from 'react-redux';
import LoginView from './loginView';
import {reduxForm} from 'redux-form';
import { testPassword, checkForWhiteSpace } from '../../utils';
import { authenticateUser } from '../../store/actions/user_actions';

const validate = (values, field) => {
  const errors = {};
  if (!values.username) errors.username = "Enter your Username";
  if (!values.password ) errors.password = "Enter your password";
  if (checkForWhiteSpace(values.password)) errors.password = "Password cannot have whitespace";
  if (checkForWhiteSpace(values.username)) errors.username = "Username cannot have whitespace";
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
