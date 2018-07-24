import { connect } from 'react-redux';
import LibraryView from './libraryView';
import { activeAlbum, deleteAlbum, getAlbums } from '../../store/actions/album_actions';

const mapStateToProps = state => {
  const { albums: { albums }, user: { token } } = state;
  return { albums, token }
}

const Library = connect(
  mapStateToProps,
  { activeAlbum, deleteAlbum, getAlbums },
)(LibraryView);

export default Library;
