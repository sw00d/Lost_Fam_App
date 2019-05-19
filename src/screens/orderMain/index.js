import { connect } from 'react-redux';
import orderMainView from './orderMainView';

const mapStateToProps = state => {
  const { albums: {activeAlbum}, user: {token}, app: { isConnected } } = state;
  return { activeAlbum, token, isConnected };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(orderMainView);

export default Main;
