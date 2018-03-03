import { connect } from 'react-redux';
import CameraView from './cameraView';
import { sendPhoto } from '../../store/actions';

const mapStateToProps = state => {
  const { camType } = state;
  // console.log(state)
  return { camType };
}

const mapDispatchToProps = state => {
  // console.log(state)
  return { sendPhoto };
}


const Camera = connect(
  mapStateToProps,
  { sendPhoto }
)(CameraView);

export default Camera;
