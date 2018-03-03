import { connect } from 'react-redux';
import CameraView from './cameraView';
import { sendPhoto } from '../../store/actions';

const mapStateToProps = state => {
  const { albums: {activeAlbum} } = state;
  // console.log(state)
  return { activeAlbum };
}

const mapDispatchToProps = dispatch => {
  // console.log(state)
  return { sendPhoto };
}


const Camera = connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraView);

export default Camera;
