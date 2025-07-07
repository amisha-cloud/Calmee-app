import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  skipButton: {
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

  topSection: {
    backgroundColor: '#DDE3FE', 
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 60,
  },

  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },

  heading: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'Inter_800Bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
    color: '#333',
  },

  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 25,
    marginTop: 15,
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
