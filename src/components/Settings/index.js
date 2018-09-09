import { connect } from 'react-redux';
import settingsView from './settingsView';
import { logout } from '../../store/actions/general_actions'

const mapStateToProps = state => {
  const { albums: {activeAlbum}, user:{token} } = state;
  return { activeAlbum, token };
}

const mapDispatchToProps = dispatch => {

 return { logout: () => dispatch(logout()) }
}


const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(settingsView);

export default Settings;
