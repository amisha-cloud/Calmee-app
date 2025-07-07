import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#A3BFFC',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  container: {
    position: 'relative',
    height: 330,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 10,
  },

  side: {
  width: 40,
  alignItems: 'flex-start',
  justifyContent: 'center',
},

 center: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

sideRight: {
  width: 40,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 10,
},

  logo: {
    width: 80,
    height: 40,
  },

  middleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },

  badgeWrapper: {
    position: 'relative',
  },

  badgeCount: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#ff6666',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textWrapper: {
    marginTop: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    fontSize: 16,
    color: '#f0f0f0',
    marginTop: 6,
  },
});
