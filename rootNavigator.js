import { createStackNavigator } from "react-navigation";
import Camera from './src/components/camera/index';
import TitleScreen from './src/components/titleScreen/index';
import Library from './src/components/library/index';
import NewAlbum from './src/components/newAlbum/index';
import FinishedAlbumView from './src/components/completeAlbum/index';
import Settings from './src/components/Settings/index';
import SignUp from './src/components/signUp/index';
import Login from './src/components/login/index';
import orderMain from './src/components/orderMain/index';
import Splash from './src/components/splashScreen/index';
import address from './src/components/address/index';
import stripe from './src/components/stripe/index';
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
  headerMode: 'none'
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
  login:{
    screen: Login
  },
  signUp: {
      screen: SignUp
  },
  splash: {
      screen: Splash
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
  initialRouteName: 'splash',
  headerMode: 'none'
});

export default rootNavigator;
