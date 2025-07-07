import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 24,
    marginRight: 12,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#222',
  },
  journalCard: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
  },
  journalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  journalSubText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  seeAll: {
    fontSize: 14,
    color: '#4A90E2',
  },
  articleCard: {
    width: 200,
    height: 130,
    borderRadius: 16,
    marginRight: 12,
    padding: 12,
    justifyContent: 'space-between',
  },
  articleLabel: {
    fontSize: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  melodyCard: {
    width: 140,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#D0F0EF',
    marginRight: 12,
    padding: 12,
    justifyContent: 'space-between',
  },
  melodyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  melodyDuration: {
    fontSize: 12,
    color: '#666',
  },
});