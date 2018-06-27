import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    height: height/30,
    fontSize: 15,
    fontWeight: '100',
    color: 'red',
    width: width,
    paddingLeft: width/8,
    marginTop: height/40,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  input: {
    width: width/1.2,
    height: height/12,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    fontSize: 20,
    fontWeight: '100',
    color: 'black',
    paddingLeft: width/8,
    paddingBottom:0
  },
  errorText: {
    paddingTop: height/40,
    width: width/1.2,
    fontWeight: '200',
    color: 'red'
  },
  hasDanger: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  success: {
    borderBottomColor: '#3131c7',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  title: {
    color: 'gainsboro',
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gainsboro'
  },
  btnHidden: {
    display: 'none'
  },
  submitBtn: {
    position: 'absolute',
    width: width/1.2,
    height: height/10,
    backgroundColor: "#C95656",
    justifyContent: 'center',
    alignItems: 'center',
    left: (width-width/1.2)/2,
    top: height/1.5,
    borderRadius: 20
  },
  btnFont: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    height: height/10,
    width: width,
    backgroundColor: '#C95656',
  },
  content: {
    width: width,
  }
});
