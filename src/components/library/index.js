import { connect } from 'react-redux';
import LibraryView from './libraryView';
import { activeAlbum, deleteAlbum } from '../../store/actions/album_actions';

const mapStateToProps = state => {
  const { albums: { albums }, user: {token} } = state;
  return { albums, token }
}

const Library = connect(
  mapStateToProps,
  { activeAlbum, deleteAlbum },
)(LibraryView);

export default Library;
