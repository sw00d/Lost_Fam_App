import { connect } from 'react-redux';
import splashScreen from './splashScreenView';
import { saveToken } from '../../store/actions/user_actions'



const mapStateToProps = (state) => {
  const { user: {token} } = state;
  return { token }
}


export default connect(
  mapStateToProps,
  { saveToken }
)(splashScreen);
