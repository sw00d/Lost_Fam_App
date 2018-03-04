import { connect } from 'react-redux';
import CameraView from './cameraView';
import { savePhoto } from '../../store/actions';

const mapStateToProps = state => {
  const { albums: {activeAlbum} } = state;
  return { activeAlbum };
}

const Camera = connect(
  mapStateToProps,
  { savePhoto }
)(CameraView);

export default Camera;
