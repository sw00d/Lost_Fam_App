import { StackNavigator } from "react-navigation";
import Camera from './src/components/camera/index';
import TitleScreen from './src/components/titleScreen/index';
import Library from './src/components/library/index';
import NewAlbum from './src/components/newAlbum/index';
import FinishedAlbumView from './src/components/completeAlbum/index';
import Settings from './src/components/Settings/index';
import SignUp from './src/components/signUp/index';
import Login from './src/components/login/index';


export const InnerStack = StackNavigator({
  camera: {
    screen: Camera,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  library: {
    screen: Library,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  newAlbum: {
    screen: NewAlbum
  },
  finishedAlbum: {
    screen: FinishedAlbumView
  },
  settings: {
    screen: Settings
  }
},
{
  initialRouteName: 'library',
  headerMode: 'none'
});

const rootNavigator = StackNavigator({
  titleScreen: {
    screen: TitleScreen,
  },
  login:{
    screen: Login
  },
  signUp: {
      screen: SignUp
  },
  mainScreens: {
    screen: InnerStack,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null
    }
  }
},
{
  // initialRouteName: 'mainScreens',
  initialRouteName: 'login',
  headerMode: 'none'
});

export default rootNavigator;
