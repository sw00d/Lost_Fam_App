import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const bottomBannerHeight = height/8;
const topBannerHeight = height/9;
const circleDiam = height/10;


export default StyleSheet.create({
  header: {
    height: height/10,
    width: width,
    backgroundColor: '#C95656',
  },
  title: {
    color: "white",
    width
  },
  topBanner: {
    height: topBannerHeight,
    width: width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    top: 0,
    flexDirection: 'row',
  },
  scroll: {
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 50,
  },
  pic: {
    margin: 10,
    height: height/5,
    width: width/5
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
});
