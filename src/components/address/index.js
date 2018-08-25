import { connect } from 'react-redux';
import addressView from './addressView';

const mapStateToProps = state => {
  const { albums: {activeAlbum}, user: {token}, app: { isConnected } } = state;
  return { activeAlbum, token, isConnected };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


const address = connect(
  mapStateToProps,
  mapDispatchToProps
)(addressView);

export default address;
