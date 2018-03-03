import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const bottomBannerHeight = height/8;
const topBannerHeight = height/9;
const circleDiam = height/10;
const miniCircleDiam = height/13;
const camHeight = height-(bottomBannerHeight+topBannerHeight);
export default StyleSheet.create({
  camHeight: {
    height: camHeight,
    width: width
  },
  icon: {
    paddingTop: height/50
  },
  topBanner: {
    height: topBannerHeight,
    width: width,
    backgroundColor: '#E9C189',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    top: 0,
    flexDirection: 'row',
  },
  bottomBanner: {
    position: 'relative',
    bottom: 0,
    height: bottomBannerHeight,
    width: width,
    backgroundColor: '#E9C189',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 23,
  },
  circle: {
    borderStyle: 'solid',
    borderWidth: width/100,
    borderColor: 'white',
    backgroundColor: 'transparent',
    width: circleDiam,
    height: circleDiam,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  miniCircle: {
    // position: 'absolute',
    backgroundColor: 'white',
    width: miniCircleDiam,
    height: miniCircleDiam,
    borderRadius: 100
  }
})
