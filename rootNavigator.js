import { StackNavigator } from "react-navigation";
import Camera from './src/components/camera/cameraView';
import Login from './src/components/login/index';
import Camera from './src/components/library/libraryView';
export const InnerStack = StackNavigator({
  camera: {
    screen: Camera,
    navigationOptions: {}
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
