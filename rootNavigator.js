import { StackNavigator } from "react-navigation";
import Camera from './src/components/camera/index';
import Login from './src/components/login/index';
import Library from './src/components/library/index';
import NewAlbum from './src/components/newAlbum/index';
import FinishedAlbumView from './src/components/completeAlbum/index';
import Settings from './src/components/Settings/index';


export const InnerStack = StackNavigator({
  camera: {
    screen: Camera,
    navigationOptions: {}
  },
  library: {
    screen: Library
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
  initialRouteName: 'camera',
  navigationOptions: {
   headerStyle: {
     backgroundColor: '#C95656',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
     fontSize: 25,
     letterSpacing: 1,
   },
 },
});

const rootNavigator = StackNavigator({
  login: {
    screen: Login,
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
  initialRouteName: 'login',
  headerMode: 'none'
});

export default rootNavigator;
