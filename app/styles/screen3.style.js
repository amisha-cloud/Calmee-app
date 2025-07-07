import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    position: 'relative',
  },

  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },

  skipText: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: '500',
  },

  image: {
    width: 250,
    height: 300,
    alignSelf: 'center',
    marginTop: 60,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    color: '#333',
    marginTop: 30,
    paddingHorizontal: 20,
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 15,
    paddingHorizontal: 25,
    lineHeight: 22,
  },

  navigationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 30,
    marginTop: 'auto',
  },

  dotsContainer: {
    flexDirection: 'row',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },

  dotActive: {
    backgroundColor: '#6C63FF',
    width: 12,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },

  continueButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
