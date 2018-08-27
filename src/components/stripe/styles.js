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
  row: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    height: topBannerHeight*1.5,
    width: width /1.2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  section: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'

  },
  detail: {
    color: 'grey',
    fontSize: 15,
  },
  body: {
    width: width,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }


})

export default styles;
