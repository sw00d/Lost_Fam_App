import { connect } from 'react-redux';
import CameraView from './cameraView';
import { savePhoto } from '../../store/actions';

const mapStateToProps = state => {
  const { albums: {activeAlbum} } = state;
  // console.log(state)
  return { activeAlbum };
}

const mapDispatchToProps = dispatch => {
  // console.log(state)
  return { savePhoto };
}


const Camera = connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraView);

export default Camera;
