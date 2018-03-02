import { connect } from 'react-redux';
import LoginView from './loginView';
import { flipASwitch } from '../../actions';

const mapStateToProps = state => {
  const { test } = state;
  return { test };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => alert('Autheincate'),
    flipASwitch
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default Login;
