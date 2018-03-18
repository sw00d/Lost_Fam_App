import { connect } from 'react-redux';
import signUpView from './signUpView';
import {reduxForm} from 'redux-form';
import { testEmail } from '../../utils';
import { testName } from '../../utils';
import { testPassword } from '../../utils';
import { createUser } from '../../store/actions/user_actions';

const validate = (values, field) => {
  const errors = {};
  if (!values.email || !testEmail(values.email)) errors.email = "Requires valid email address";
  if (!values.fullName || !testName(values.fullName)) errors.fullName = "Please enter you name";
  if (!values.password || !testPassword(values.password)) errors.password = "Enter a password at least 6 characters";
  if (!values.confirmPass) errors.confirmPass = "Confirm your password";
  if (values.password !== values.confirmPass && values.confirmPass != undefined) {
      errors.confirmPass = "Entered passwords must match";
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
  validate: validate,
  destroyOnUnmount: true,
  form: 'register'
})(SignUp);
