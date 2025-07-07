import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  moodButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    marginRight: 10,
    alignItems: 'center',
    width: 80,
    height: 90,
    elevation: 3,
    justifyContent: 'center',
  },
  selectedMood: {
    backgroundColor: '#B6C7FF',
  },
  emoji: {
    fontSize: 28,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '600',
  },
});
