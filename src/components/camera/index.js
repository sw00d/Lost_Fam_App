import { connect } from 'react-redux';
import CameraView from './cameraView';
import { savePhoto } from '../../store/actions/album_actions';
import { updateConnection } from '../../store/actions/general_actions';

const mapStateToProps = state => {
  const { albums: {activeAlbum}, user: {token}, app: { isConnected } } = state;
  return { activeAlbum, token, isConnected };
}

const mapDispatchToProps = dispatch => {
  return {
    savePhoto : (e) => dispatch(savePhoto(e)),
    updateConnection : (e) => dispatch(updateConnection(e))
  }
}


const Camera = connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraView);

export default Camera;
