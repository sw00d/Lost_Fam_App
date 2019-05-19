import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center'
  },
  content: {
    marginTop: height/2.3,
  },
  text: {
    fontSize: 23,
    fontWeight: "bold"
  }
});
