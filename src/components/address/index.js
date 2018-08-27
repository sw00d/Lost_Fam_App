import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import addressView from './addressView';

const mapStateToProps = state => {
  const { albums: {activeAlbum}, user: {token}, app: { isConnected } } = state;
  return { activeAlbum, token, isConnected };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'address'
})(addressView);
