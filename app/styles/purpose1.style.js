import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  illustration: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1D1D1D',
    textAlign: 'center',
    marginBottom: 12,
  },
  optionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  progress: {
    textAlign: 'center',
    color: '#aaa',
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: '#6A5AE0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#d3ccfa',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  skip: {
    color: '#6A5AE0',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '500',
  },
});
