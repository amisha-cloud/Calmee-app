import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FooterNav from '../components/FooterNav';

export default function PasscodeScreen() {
  const router = useRouter();
  const { next } = useLocalSearchParams();
  const [input, setInput] = useState('');
  const correctPasscode = '1234';

  const handleVerify = () => {
    if (input === correctPasscode) {
      if (next === 'BlankPage') {
        router.push('/onboarding/Screen/BlankPageScreen');
      } else if (next === 'PromptedJournaling') {
        router.push('/onboarding/Screen/PromptedJournalingScreen');
      } else {
        Alert.alert('Navigation Error', 'Unknown target screen.');
      }
    } else {
      Alert.alert('Incorrect Passcode', 'Try again.');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F7FB' }}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position:'absolute',
          top: 50,
          left: 24,
          zIndex: 10,
          flexDirection:'row',
          alignItems:'center',
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
        <Text style={{ marginLeft: 8, fontSize: 16, color: '#333' }}>Back</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            borderRadius: 16,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#E5E4FA',
              borderRadius: 50,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <FontAwesome name="lock" size={32} color="#6A5AE0" />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginBottom: 10,
              color: '#333',
              textAlign: 'center',
            }}
          >
            Enter your passcode to access your journal
          </Text>

          <TextInput
            secureTextEntry
            placeholder="4-digit code"
            value={input}
            onChangeText={setInput}
            keyboardType="numeric"
            maxLength={4}
            style={{
              width: '60%',
              paddingVertical: 12,
              paddingHorizontal: 16,
              fontSize: 10,
              backgroundColor: '#F0F0F5',
              borderRadius: 10,
              marginTop: 24,
              textAlign: 'center',
              letterSpacing: 8,
            }}
          />

          <Text style={{ color: '#888', fontSize: 13, marginBottom: 20 }}>
            💡 Hint: Your passcode is{' '}
            <Text style={{ fontWeight: '600' }}>1234</Text>
          </Text>

          <TouchableOpacity
            onPress={handleVerify}
            style={{
              backgroundColor: '#6A5AE0',
              paddingVertical: 14,
              paddingHorizontal: 40,
              borderRadius: 10,
              shadowColor: '#6A5AE0',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 4,
            }}
          >
            <Text
              style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}
            >
              Enter
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FooterNav />
    </View>
  );
}
