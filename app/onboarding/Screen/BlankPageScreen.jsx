import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FooterNav from '../components/FooterNav';

export default function BlankPageScreen() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const today = new Date().toLocaleDateString('en-GB'); // Format: DD/MM/YYYY

  const handleSave = () => {
    if (content.trim() === '') {
      Alert.alert('Empty Journal', 'Please write something before saving.');
      return;
    }
    Alert.alert('Saved', 'Your journal entry has been saved!');
    setContent('');
    setTitle('');
    router.back(); // Go back to previous screen
  };

  return (
    <SafeAreaView style={{ paddingTop:50, flex: 1, backgroundColor: '#F7F7FB' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1, padding: 20 }}>
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Ionicons name="arrow-back" size={24} color="#333" />
              <Text style={{ marginLeft: 8, fontSize: 16, color: '#333' }}>
                Back
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#333',
                marginBottom: 10,
              }}
            >
              Blank Page
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: '#888',
                marginBottom: 10,
              }}
            >
              {today}
            </Text>

            <TextInput
              placeholder="Write your title..."
              value={title}
              onChangeText={setTitle}
              style={{
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#ddd',
                fontSize: 16,
                marginBottom: 16,
              }}
            />

            <TextInput
              multiline
              placeholder="“Self-care isn’t selfish...”"
              value={content}
              onChangeText={setContent}
              style={{
                minHeight: 200,
                padding: 16,
                fontSize: 16,
                backgroundColor: '#fff',
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#ddd',
                textAlignVertical: 'top',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
                elevation: 2,
              }}
            />

            <TouchableOpacity
              onPress={handleSave}
              style={{
                marginTop: 24,
                backgroundColor: '#6A5AE0',
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: 'center',
                shadowColor: '#6A5AE0',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '600',
                }}
              >
                Save Entry
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <FooterNav />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
