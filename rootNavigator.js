import { StackNavigator } from "react-navigation";
import Camera from './src/components/camera/index';
import Login from './src/components/login/index';
import Library from './src/components/library/index';
import NewAlbum from '././src/components/newAlbum/index';

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
  }
},
{
  initialRouteName: 'camera',
  headerMode: 'none'
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
