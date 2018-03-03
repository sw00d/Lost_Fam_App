import { connect } from 'react-redux';
import finishedAlbumView from './finishedAlbumView';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
 return {}
}


const CompletedAlbum = connect(
  mapStateToProps,
  mapDispatchToProps
)(finishedAlbumView);

export default CompletedAlbum;
