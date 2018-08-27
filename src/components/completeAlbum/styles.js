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
  scrollContainer: {
    height: height-topBannerHeight
  },
  pic: {
    marginBottom: 10,
    //marginLeft: (width-((width/5)*4))/5, //4 is photos per row
                                        // and the 5 accounts
                                        // for all marigns.
    height: '100%',
    width: '100%'
  },
  picContainer: {
    borderColor: 'white',
    borderWidth: 2,
    width: width/3,
    height: height/5,
  },
  Btn: {
    backgroundColor: '#C95656',
    width: '45%',
    marginTop: height/30,
    marginBottom: height/30,
    height: height/10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnFont: {
    color: 'white',
    fontSize: 20,
  }
});
