import { StyleSheet } from 'react-native';

export default (height, width) => {
  return StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: '#C95656',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: height*.60
    },
    signUpBtn: {
      height: height / 9,
      width: width / 1.2,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderRadius: 10,
      borderWidth: 2
    },
    signUpBtnText: {
      color: 'white',
      fontSize: height / 32,
      fontWeight: '600'
    },
    loginBtnText: {
      color: 'white',
      fontWeight: '600',
      fontSize: height / 40,
    },
    descript: {
      color: 'white',
      fontWeight: '600',
      fontSize: height / 40,
      position: 'absolute',
      top: height*.5
    },
    loginBtn: {
      marginTop: height / 6 / 4
    },
    logoContainer: {
      position: 'absolute',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: height*.2
    },
    logoText: {
      color: 'white',
      fontSize: height / 16,
      fontWeight: '700',
      letterSpacing: 1

    },
  })
}
