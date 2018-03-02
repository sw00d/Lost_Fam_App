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
    signUpBtn: {
      height: height / 6,
      width: width / 1.2,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderRadius: 10,
      borderWidth: 2
    },
    signUpBtnText: {
      color: 'white',
      fontSize: height / 24,
      fontWeight: '600'
    },
    loginBtnText: {
      color: 'white',
      fontWeight: '600',
      fontSize: height / 40,
    },
    loginBtn: {
      marginTop: height / 6 / 4
    }
  })
}
