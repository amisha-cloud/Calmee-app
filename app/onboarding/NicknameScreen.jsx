import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { auth, db } from '../config/Firebase'; // ✅ make sure this path is correct
import styles from '../styles/nickname.style';

export default function NicknameScreen() {
  const router = useRouter();
  const { purpose1, purpose2, purpose3, purpose4 } = useLocalSearchParams(); // ✅ get answers from previous screen
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!nickname.trim()) {
      Alert.alert('Nickname Required', 'Please enter a nickname');
      return;
    }

    const uid = auth.currentUser?.uid;

    if (!uid) {
      Alert.alert('Error', 'User not authenticated');
      return;
    }

    setLoading(true);
    try {
      await setDoc(doc(db, 'userProfiles', uid), {
        purpose1,
        purpose2,
        purpose3,
        purpose4,
        nickname,
        timestamp: new Date(),
      });

      router.replace('/onboarding/MainDashboard'); // ✅ navigate to home or dashboard
    } catch (error) {
      console.error('Firestore Error:', error);
      Alert.alert('Error', 'Could not save your information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>What name feels like you?</Text>

      <Animated.Image
        entering={FadeInDown.duration(800)}
        source={require('../../assets/images/flower.png')}
        style={styles.illustration}
      />

      <Text style={styles.subtitle}>
        Tell us what to call you, something fun, friendly, or just yours.
      </Text>

      <TextInput
        placeholder="Write your nickname"
        style={styles.input}
        value={nickname}
        onChangeText={setNickname}
      />

      <TouchableOpacity
        style={[styles.primaryButton, !nickname && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!nickname || loading}
      >
        <Text style={styles.primaryButtonText}>
          {loading ? 'Saving...' : 'Continue'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
