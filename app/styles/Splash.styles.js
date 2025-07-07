import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#919CFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.6,    
    height: height * 0.3,   
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default styles;
