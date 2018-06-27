import { StyleSheet } from 'react-native';

export default (height, width) => {
  return StyleSheet.create({
    body: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .8
    },
    container: {
      position: 'relative',
      width: width/1.05,
      height: height/1.5,
      backgroundColor: 'rgba(0,0,0,.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: '#C95656',
      borderWidth: 0,
      borderRadius: 30,
    },
    btnContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: height/2.3
    },
    signUpBtn: {
      height: height / 9,
      width: width / 1.4,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C95656',
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor: 'rgba(0,0,0,.5)',
    },
    signUpBtnText: {
      color: '#C95656',
      fontSize: height / 32,
      fontWeight: '600'
    },
    loginBtnText: {
      color: '#C95656',
      fontWeight: '600',
      fontSize: height / 40,
    },
    descript: {
      color: '#C95656',
      fontWeight: '600',
      fontSize: height / 40,
      position: 'absolute',
      top: height/3.5
    },
    loginBtn: {
      marginTop: height / 6 / 4
    },
    logoContainer: {
      position: 'absolute',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: height/13
    },
    logoText: {
      color: '#C95656',
      fontSize: height / 16,
      fontWeight: '700',
      letterSpacing: 1

    },
  })
}
