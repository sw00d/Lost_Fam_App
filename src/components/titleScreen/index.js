import { connect } from 'react-redux';
import TitleView from './titleView';
import { saveToken } from '../../store/actions/user_actions'

const mapStateToProps = state => {
  const { token } = state.user;
  return { token };
}


const TitleScreen = connect(
  mapStateToProps,
  { saveToken }
)(TitleView);

export default TitleScreen;
