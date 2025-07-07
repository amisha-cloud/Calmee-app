import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7DFFF',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 100, // Adjusted to avoid overlap with bottom nav
  },

  section: {
    marginVertical: 20,
  },

  moodSection: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 20,
  },

  illustration: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  heading: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  moodRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center',
  },

  moodButton: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 14,
    alignItems: 'center',
    width: 72,
    height: 72,
    margin: 8,
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

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },

  thoughtCard: {
    backgroundColor: '#E9EDFF',
    borderRadius: 18,
    padding: 20,
    marginRight: 16,
    width: 260,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thoughtImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 12,
  },

  quoteText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#444',
    textAlign: 'center',
    lineHeight: 20,
  },

  timelineItem: {
    position: 'relative',
    paddingLeft: 24,
    marginBottom: 20,
  },

  timelineLine: {
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: '#5667FD',
    left: 10,
    top: 0,
  },

  flowCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    elevation: 2,
    alignItems: 'center',
  },

  flowImage: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
    marginRight: 14,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  cardDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  progressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F6FF',
    paddingVertical: 28,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    marginVertical: 16,
  },

  progressPercent: {
    fontSize: 36,
    fontWeight: '700',
    color: '#3D4FDB',
  },

  progressLabel: {
    fontSize: 15,
    color: '#444',
    marginTop: 8,
    textAlign: 'center',
  },

  progressBreakdown: {
    fontSize: 13,
    textAlign: 'center',
    color: '#888',
    marginTop: 12,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeModal: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 22,
    width: '85%',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  badgeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },

  badgeImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginVertical: 14,
  },

  badgeSubtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5667FD',
    marginBottom: 4,
  },

  badgeDescription: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },

  continueButton: {
    backgroundColor: '#5667FD',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 18,
    width: '100%',
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 12,
    paddingHorizontal: 10,
  },

  wellnessWrapper: {
    backgroundColor: '#EDF0FF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 20,
    elevation: 2,
  },
});
