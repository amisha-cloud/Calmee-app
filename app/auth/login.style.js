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
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1D1D1D',
    marginBottom: 6,
  },
  subtext: {
    fontSize: 14,
    color: '#6e6e6e',
    marginBottom: 20,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
  },
  inputIcon: {
    marginRight: 8,
  },
  eyeIcon: {
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#6A5AE0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  disabledButton: {
    backgroundColor: '#d3ccfa',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signupPrompt: {
    textAlign: 'center',
    color: '#6e6e6e',
    fontSize: 13,
  },
  signupLink: {
    color: '#6A5AE0',
    fontWeight: '500',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#333',
  },
  orText: {
    textAlign: 'center',
    color: '#aaa',
    marginVertical: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  socialIconButton: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
});
