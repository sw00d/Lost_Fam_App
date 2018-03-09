import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  option: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    height: topBannerHeight*1.5,
    width: width /1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  font: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default styles;
