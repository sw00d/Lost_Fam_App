import { connect } from 'react-redux';
import NewAlbumView from './newAlbumView';
import { addAlbum } from '../../store/actions/album_actions';

const mapStateToProps = (state) => {
  const { albums:{ albums, albumSaved }, user: {token} } = state;
  return { albums, token, albumSaved }
}

const NewAlbum = connect(
  mapStateToProps,
  { addAlbum }
)(NewAlbumView);

export default NewAlbum;
