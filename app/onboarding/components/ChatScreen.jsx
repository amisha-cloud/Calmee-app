import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../componentstyles/chatScreen.style';

export default function ChatScreen() {
  const router = useRouter();

  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hey Ana here! 😊 It's great to have you back." },
    { from: 'bot', text: 'How are you feeling today?' },
    { from: 'bot', text: 'I’m here for you — whether you want to talk, share, or just need a little support.' },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botReply = '';
    if (input.toLowerCase().includes('sad')) {
      botReply = "I'm really sorry you're feeling that way. Want to talk about it?";
    } else if (input.toLowerCase().includes('happy')) {
      botReply = "That's wonderful to hear! 😊 What made your day good?";
    } else if (input.toLowerCase().includes('help')) {
      botReply = "Sure! I'm here to help. What do you need support with?";
    } else {
      botReply = "Thank you for sharing. I'm listening. 💬";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    }, 600);

    setInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/onboarding/MainDashboard')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Chat with Calmee</Text>
      </View>

      <ScrollView contentContainerStyle={styles.chatArea}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={msg.from === 'bot' ? styles.botBubble : styles.userBubble}
          >
            <Text style={msg.from === 'bot' ? styles.botText : styles.userText}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        style={styles.inputArea}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          placeholder="Write your message"
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
