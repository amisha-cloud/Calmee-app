import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE9FD',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4B3CC6', 
    textAlign: 'center',
    marginBottom: 12,
  },
  illustration: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#6E6E6E',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    color: '#1D1D1D',
  },
  primaryButton: {
    backgroundColor: '#6A5AE0',  
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
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
