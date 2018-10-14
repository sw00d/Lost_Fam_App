import { StyleSheet } from 'react-native';


export default (height, width) => {
  return StyleSheet.create({
    body: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    container: {
      width,
      height: height/1.25,
      alignItems: 'center',
    },
    btnContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: height/1.8,
      width
    },
    signUpBtn: {
      height: height / 9,
      width: width / 1.2,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#fff',
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor: 'rgba(0,0,0,.2)',
    },
    signUpBtnText: {
      color: '#fff',
      fontSize: height / 32,
      fontWeight: '600'
    },
    loginBtnText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: height / 40,
    },
    loginBtn: {
      marginTop: height / 6 / 4
    },
    description: {
      color: '#fff',
      fontWeight: '600',
      fontSize: height / 40,
      position: 'absolute',
      top: height/2.5,
    },
    logoContainer: {
      position: 'absolute',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoText: {
      color: '#fff',
      fontSize: height / 16,
      fontWeight: '700',
      letterSpacing: 1
    },
  })
}
