import { connect } from 'react-redux';
import LibraryView from './libraryView';
import { activeAlbum } from '../../store/actions';

const mapStateToProps = state => {
  const { albums: { albums } } = state;
  return { albums }
}

const Library = connect(
  mapStateToProps,
  { activeAlbum }
)(LibraryView);

export default Library;
