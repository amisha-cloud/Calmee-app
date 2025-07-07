import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E8FF',
  },

  header: {
    alignItems: 'center',
    backgroundColor: '#D7DFFF',
    paddingVertical: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  username: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  statBox: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
  },

  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5667FD',
    marginVertical: 6,
  },

  statLabel: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },

  menu: {
    marginTop: 30,
    paddingHorizontal: 24,
  },

  menuItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
  },

  menuText: {
    marginLeft: 14,
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
    backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
  },

});
