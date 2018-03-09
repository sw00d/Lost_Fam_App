import { connect } from 'react-redux';
import settingsView from './settingsView';

const mapStateToProps = state => {
  const { albums: {activeAlbum} } = state;
  return { activeAlbum };
}

const mapDispatchToProps = dispatch => {
 return {}
}


const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(settingsView);

export default Settings;
