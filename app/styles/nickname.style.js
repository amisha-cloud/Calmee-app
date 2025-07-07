import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5AE0',
    padding: 20,
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
  fontSize: 22,
  fontWeight: '600',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 20,
},

illustration: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginVertical: 20,
},


  subtitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: '#6A5AE0',
    fontWeight: '600',
  },
});
