import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const bottomBannerHeight = height/8;
const topBannerHeight = height/9;
const circleDiam = height/10;

console.log(width, width/5, (width-((width/5)*3))/3);
export default StyleSheet.create({
  header: {
    height: height/10,
    width: width,
    backgroundColor: '#C95656',
  },
  title: {
    color: "white",
    width,
    fontSize: 20
  },
  topBanner: {
    height: topBannerHeight,
    width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    top: 0,
    flexDirection: 'row',
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pic: {
    marginBottom: 10,
    marginLeft: (width-((width/5)*4))/5, //4 is photos per row
    height: height/5,                   // and the 5 accounts
    width: width/5                       // for all marigns.
  },
  lastPic: {
    position: 'absolute',
    left: '-10px'
  },
  btn: {
    backgroundColor: 'transparent',
    borderColor: '#C95656',
    borderWidth: 2,
    borderStyle: 'solid',
    width: width/1.3,
    height: topBannerHeight,
  }
});
