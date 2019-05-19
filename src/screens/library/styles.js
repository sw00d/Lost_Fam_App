import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  refreshBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height/3,
    flexDirection: 'column',
    width: width/1.2
  },
  refreshTxt: {
    color: 'lightgrey'
  },
  pic: {
    marginBottom: 10,
    marginTop: 10,
    height: height/10,
    width: width/10
  },
  directions: {
    justifyContent: 'center',
    alignItems: 'center',
    width
  },
  header: {
    height: height/10,
    width,
    backgroundColor: '#C95656',
  },
  swipeCont: {
    width,
    backgroundColor: '#E9E7EF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent'
  },
  icon: {
    paddingTop: height/50,
    paddingRight: width/15
  },
  container: {
    height,
    width,
    alignItems: 'center',
  },
  topBanner: {
    top: 0,
    height: topBannerHeight,
    width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontSize: 19,
    fontWeight: '700'
  },
  row: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    height: topBannerHeight*1.5,
    width: width/1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  albText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default styles;
