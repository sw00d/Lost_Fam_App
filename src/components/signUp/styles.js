import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
console.log(height)
export default StyleSheet.create({
    container: {
      height: height,
      width: width,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'gainsboro'
    },
    submitBtn: {
      width: width,
      height: height/10,
      backgroundColor: "#C95656",
      justifyContent: 'center',
      alignItems: 'center',
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
      width: width
    }
});
