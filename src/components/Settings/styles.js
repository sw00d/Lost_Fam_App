import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  header: {
    height: height/10,
    width: width,
    backgroundColor: '#C95656',
  },
  title: {
    color: "white",
  },
  container: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  option: {
    marginTop: height/10,
    backgroundColor: 'transparent',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    borderTopColor: 'gainsboro',
    borderTopWidth: 1,
    height: topBannerHeight*1.5,
    width: width /1.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  font: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default styles;
