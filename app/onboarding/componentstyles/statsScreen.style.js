import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E8FF',
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 120,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  backButton: {
    marginRight: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
  },

  value: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5667FD',
    marginTop: 10,
  },

  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  chartTitle: {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 10,
  color: '#333',
},
    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
    },
    
    chart: {
        height: 200,
        width: '100%',
    },
    
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F6F8FF',
        borderTopWidth: 1,
        borderTopColor: '#E0E5FF',
    },
    
    footerText: {
        fontSize: 14,
        color: '#666',
    },
});
