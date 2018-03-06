import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    alignItems: 'center',

  },
  topBanner: {
    top: 0,
    height: topBannerHeight,
    width: width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: width/20
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingLeft: width/11,
    paddingTop: height/60,
    fontWeight: '700',
  },
  btnText: {
    color: 'white',
    fontSize: height/50
  },
  input: {
    marginTop: height/15,
    height: height/12,
    width: width/1.2,
    borderBottomColor: 'rgba(0,0,0,.5)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontSize: height/24
  },
  button: {
    backgroundColor: '#c95656',
    width: width/1.2,
    height: height/15,
    marginTop: height/20,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default styles;
