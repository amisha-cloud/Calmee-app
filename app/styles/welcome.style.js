import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    backgroundColor: '#5B6EFE',
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  bottomSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  subheading: {
    fontSize: 16,
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },

  // ✅ INPUT FIELD STYLES
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    width: width * 0.85,
    paddingHorizontal: 15,
    marginBottom: 18,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#333',
  },
  inputIcon: {
    marginRight: 10,
  },
  eyeIcon: {
    padding: 4,
  },

  // ✅ Buttons
  actionButtons: {
    flexDirection: 'row',
    marginTop: 25,
    gap: 10,
  },
  signupButton: {
    backgroundColor: '#5B6EFE',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signinButton: {
    borderColor: '#5B6EFE',
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  signinText: {
    color: '#5B6EFE',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 30,
    marginBottom: 20,
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
  },

  // ✅ Login Submit Button
  primaryButton: {
    backgroundColor: '#5B6EFE',
    borderRadius: 10,
    paddingVertical: 14,
    width: width * 0.85,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#C4C4C4',
  },
});
