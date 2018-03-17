import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
console.log(height)
export default StyleSheet.create({
    container: {
      height: height,
      width: width,
      alignItems: 'center',
      // justifyContent: 'space-between'

    },
    submitBtn: {
      marginTop: height/30,
      width: width*1,
      height: height/10,
      backgroundColor: "#C95656",
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
    btnFont: {
      color: 'white',
      fontSize: 20,
    },
    header: {
      height: height/10,
      width: width,
      backgroundColor: '#C95656',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    filler: {
      height:height - height/2.5,
      width: width,
      backgroundColor: 'transparent'
    },
    invisibleText: {
      color: 'transparent'
    }
});
