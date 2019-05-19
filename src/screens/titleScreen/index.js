import { connect } from 'react-redux';
import TitleView from './titleView';

const mapStateToProps = state => {
  const { token } = state.user;
  return { token };
}


const TitleScreen = connect(
  mapStateToProps,
)(TitleView);

export default TitleScreen;
