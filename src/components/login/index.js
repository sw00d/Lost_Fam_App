import { connect } from 'react-redux';
import LoginView from './loginView';

const mapStateToProps = state => {
  const { test } = state;
  return { test };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => alert('Autheincate')
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default Login;
