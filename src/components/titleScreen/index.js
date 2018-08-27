import { connect } from 'react-redux';
import TitleView from './titleView';
import { saveToken } from '../../store/actions/user_actions'

(_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('@MyLoginInfo:token');
    if (value !== null) {
      console.log('fired');
      saveToken(value)
    }
   } catch (error) {
     // Error retrieving data
   }
})

const mapStateToProps = state => {
  const { token } = state.user;
  return { token };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => alert('Authenticate'),
  }
}

const TitleScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleView);

export default TitleScreen;
