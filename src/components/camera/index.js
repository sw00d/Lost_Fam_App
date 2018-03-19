import { connect } from 'react-redux';
import CameraView from './cameraView';
import { savePhoto } from '../../store/actions/album_actions';

const mapStateToProps = state => {
  const { albums: {activeAlbum}, user: {token} } = state;
  return { activeAlbum, token };
}

const Camera = connect(
  mapStateToProps,
  { savePhoto }
)(CameraView);

export default Camera;
