import { createStackNavigator } from "react-navigation";
import Camera from './src/screens/camera/index';
import TitleScreen from './src/screens/titleScreen/index';
import Library from './src/screens/library/index';
import NewAlbum from './src/screens/newAlbum/index';
import FinishedAlbumView from './src/screens/completeAlbum/index';
import Settings from './src/screens/Settings/index';
import SignUp from './src/screens/signUp/index';
import Login from './src/screens/login/index';
import orderMain from './src/screens/orderMain/index';
import Splash from './src/screens/splashScreen/index';
import address from './src/screens/address/index';
import stripe from './src/screens/stripe/index';
import { AsyncStorage } from "react-native"


// Order screens
export const orderForm = createStackNavigator({
  main: {
    screen: orderMain
  },
  address: {
    screen: address
  },
  stripe: {
    screen: stripe
  }
},
{
  initialRouteName: 'main',
  headerMode: 'none',
  navigationOptions: {
   gestureResponseDistance: {horizontal: 500} // default is 25
  }
});



// main screens
export const InnerStack = createStackNavigator({
  library: {
    screen: Library,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  camera: {
    screen: Camera,
  },
  newAlbum: {
    screen: NewAlbum
  },
  finishedAlbum: {
    screen: FinishedAlbumView
  },
  settings: {
    screen: Settings
  },
  orderForm: {
    screen: orderForm
  }
},
{
  initialRouteName: 'library',
  headerMode: 'none',
  navigationOptions: {
   gestureResponseDistance: {horizontal: 500} // default is 25
  }
});


// login/signup screens
const rootNavigator = createStackNavigator({
  titleScreen: {
    screen: TitleScreen,
  },
  mainScreens: {
    screen: InnerStack,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null
    }
  },
  login:{
    screen: Login
  },
  signUp: {
      screen: SignUp
  },
  splash: {
      screen: Splash
  }
},
{
  initialRouteName: 'splash',
  headerMode: 'none',
  navigationOptions: {
   gestureResponseDistance: {horizontal: 500} // default is 25
  }
});

export default rootNavigator;
