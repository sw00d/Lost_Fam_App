import { connect } from 'react-redux';
import NewAlbumView from './newAlbumView';
import { addItem } from '../../store/actions';

const NewAlbum = connect(
  null,
  { addItem }
)(NewAlbumView);

export default NewAlbum;
