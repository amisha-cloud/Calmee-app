import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  illustration: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginVertical: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  progress: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#999',
  },
  primaryButton: {
    backgroundColor: '#6A5AE0',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  skip: {
    color: '#6A5AE0',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});
