import { connect } from 'react-redux';
import finishedAlbumView from './finishedAlbumView';

const mapStateToProps = state => {
  const { albums: {activeAlbum} } = state;
  return { activeAlbum };
}

const mapDispatchToProps = dispatch => {
 return {}
}


const CompletedAlbum = connect(
  mapStateToProps,
  mapDispatchToProps
)(finishedAlbumView);

export default CompletedAlbum;
