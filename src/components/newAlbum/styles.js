import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default styles;
