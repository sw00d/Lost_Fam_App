import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const bottomBannerHeight = height/10;
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  icon: {
    paddingTop: height/50,
    paddingRight: width/15
  },
  container: {
    height: height,
    width: width,
    alignItems: 'center',
  },
  topBanner: {
    top: 0,
    height: bottomBannerHeight,
    width: width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0,
    height: bottomBannerHeight,
    width: width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingLeft: width/11,
    paddingTop: height/60,
    fontWeight: '700',
  },
  row: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    height: topBannerHeight*1.5,
    width: width/1.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  albText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default styles;
