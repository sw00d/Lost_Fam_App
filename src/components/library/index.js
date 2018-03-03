import { connect } from 'react-redux';
import LibraryView from './libraryView';
import { activeAlbum, deleteAlbum } from '../../store/actions';

const mapStateToProps = state => {
  const { albums: { albums } } = state;
  return { albums }
}

const mapDispatchToProps = dispatch => {
  return { deleteAlbum }
}

const Library = connect(
  mapStateToProps,
  { activeAlbum, deleteAlbum },
  // mapDispatchToProps
)(LibraryView);

export default Library;
