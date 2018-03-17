import { connect } from 'react-redux';
import signUpView from './signUpView';
import {reduxForm} from 'redux-form';
import { testEmail } from '../../utils';
import { createUser } from '../../store/actions/user_actions';

const validate = values => {
  const errors = {};
  if (!values.email || testEmail(values.email)) errors.email = "Requires valid email address";
  if (!values.fullName) errors.email = "Please enter you name";
  if (!values.password) errors.password = "Requires a password";
  if (!values.passwordConf) errors.passwordConf = "Confirm your password";
  if (values.password !== values.passwordConf) {
    errors.password = "Entered passwords must match"
    errors.passwordConf = "Entered passwords must match"
  }
  return errors;
}

const mapStateToProps = (state) => {
  const register = state.form.register.values;
  return {
    register: register,
    validate 
  }
}

const SignUp = connect(mapStateToProps, { createUser })(signUpView);

export default reduxForm({
  validate,
  destroyOnUnmount: true,
  form: 'register'
})(SignUp);
