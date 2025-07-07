import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView, Platform, ScrollView,
  Text, TextInput, TouchableOpacity,
  View,
} from 'react-native';
import FooterNav from '../components/FooterNav';

export default function HealingPastScreen() {
  const router = useRouter();
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    if (entry.trim() === '') {
      Alert.alert('Empty Entry', 'Please write your thoughts before saving.');
      return;
    }
    Alert.alert('Saved', 'Your journal has been saved!');
    setEntry('');
    router.back();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, backgroundColor: '#FAF9FF' }}>
      <View style={{ paddingTop:50,flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 100 }} keyboardShouldPersistTaps="handled">
          <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 16 }}>
            <Ionicons name="arrow-back" size={24} color="#4A3AFF" />
          </TouchableOpacity>

          <View style={{ backgroundColor: '#E5E0FF', padding: 18, borderRadius: 16, marginBottom: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: '800', color: '#4A3AFF' }}>Healing from Past</Text>
            <Text style={{ fontSize: 13, color: '#555', marginTop: 4 }}>🗓️ 01/06/2025</Text>
          </View>
          <View style={{ backgroundColor: '#F2EEFF', borderLeftWidth: 4, borderLeftColor: '#6A5AE0', padding: 16, borderRadius: 10, marginBottom: 20 }}>
            <Text style={{ fontSize: 15, fontStyle: 'italic', color: '#555' }}>
              “Healing doesn’t mean the damage never existed. It means the damage no longer controls our lives.”
            </Text>
          </View>
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16, borderWidth: 1, borderColor: '#E2E2E2', minHeight: 200 }}>
            <TextInput
              multiline
              placeholder="What part of your past still feels unhealed..."
              placeholderTextColor="#AAA"
              value={entry}
              onChangeText={setEntry}
              style={{ fontSize: 16, textAlignVertical: 'top', color: '#333', minHeight: 150 }}
            />
          </View>
          <TouchableOpacity onPress={handleSave} style={{ backgroundColor: '#6A5AE0', marginTop: 24, paddingVertical: 16, borderRadius: 12, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Save Entry</Text>
          </TouchableOpacity>
        </ScrollView>
        <FooterNav />
      </View>
    </KeyboardAvoidingView>
  );
}
