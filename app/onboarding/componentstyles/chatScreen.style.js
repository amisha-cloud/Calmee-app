import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#5667FD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#fff',
  },

  chatArea: {
    padding: 20,
    paddingBottom: 10,
  },

  botBubble: {
    backgroundColor: '#E0E5FF',
    alignSelf: 'flex-start',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  userBubble: {
    backgroundColor: '#5667FD',
    alignSelf: 'flex-end',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  botText: {
    color: '#333',
    fontSize: 16,
    lineHeight: 22,
  },

  userText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },

  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  input: {
    flex: 1,
    backgroundColor: '#EEF1FF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#D1D6F0',
  },

  sendButton: {
    backgroundColor: '#5667FD',
    padding: 12,
    borderRadius: 50,
  },
});
