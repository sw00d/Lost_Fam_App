import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  backBtn: {
    paddingLeft: 5
  },
  spinnerContainer: {
    height: height/5,
    width: width/1.2,
  },
  header: {
    height: height/10,
    width: width,
    backgroundColor: '#C95656',
  },
  title: {
    color: 'white',
    fontSize: 19,
    fontWeight: '700'
  },
  container: {
    height: height,
    width: width,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: height / 40,
    fontWeight: '600'
  },
  input: {
    marginTop: height/15,
    height: height/12,
    width: width/1.2,
    borderBottomColor: 'rgba(0,0,0,.5)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontSize: height/24,
    textAlign: 'center'
  },
  button: {
    marginTop: height/15,
    height: height / 9,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#C95656',
  },
  row2: {
    marginTop: height/15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,.5)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  cap: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  divider: {
    height: height/15,
    width: 1,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  h2: {
    marginBottom: height/25,
    fontSize: height/35,
    color: 'rgba(0,0,0,.7)'
  },
  container2: {
    alignItems: 'center',
  },
  column1: {
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default styles;
