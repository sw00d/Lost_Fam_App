import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitBtn: {
      marginTop: height/30,
      width: width/1.2,
      height: height/10,
      backgroundColor: "#C95656",
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnFont: {
      color: 'white',
      fontSize: 20
    },
    header: {
      top: 0,
      height: height/10,
      width: width,
      backgroundColor: '#C95656',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    }
});
