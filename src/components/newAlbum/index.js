import { connect } from 'react-redux';
import NewAlbumView from './newAlbumView';
import { addAlbum } from '../../store/actions';

const mapStateToProps = (state) => {
  const { albums } = state;
  return { albums }
}

const NewAlbum = connect(
  mapStateToProps,
  { addAlbum }
)(NewAlbumView);

export default NewAlbum;
