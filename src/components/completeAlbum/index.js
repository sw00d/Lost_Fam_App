import { connect } from 'react-redux';
import finishedAlbumView from './finishedAlbumView';

const mapStateToProps = state => {
  const { albums: { activeAlbum }, user: {token} } = state;
  return { activeAlbum, token };
}

const CompletedAlbum = connect(
  mapStateToProps
)(finishedAlbumView);

export default CompletedAlbum;
