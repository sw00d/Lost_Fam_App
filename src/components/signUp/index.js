import { connect } from 'react-redux';
import signUpView from './signUpView';

const mapStateToProps = state => {
  const { albums: { albums } } = state;
  return { albums }
}


const SignUpView = connect(
  mapStateToProps,
  // mapDispatchToProps
)(signUpView);

export default SignUpView;
