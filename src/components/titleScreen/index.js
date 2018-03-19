import { connect } from 'react-redux';
import TitleView from './titleView';

const mapStateToProps = state => {
  const { token } = state.user;
  return { token };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => alert('Autheincate')
  }
}

const TitleScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleView);

export default TitleScreen;
