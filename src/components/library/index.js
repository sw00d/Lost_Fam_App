import { connect } from 'react-redux';
import LibraryView from './libraryView';

const mapStateToProps = state => {
  const { albums } = state;
  return { state }
}

const Library = connect(
  mapStateToProps
)(LibraryView);

export default Library;
