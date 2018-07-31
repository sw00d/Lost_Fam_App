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
    // fontSize: 25,
    // fontWeight: '700'
  },
  container: {
    height: height,
    width: width,
    alignItems: 'center',
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
  }

})

export default styles;
