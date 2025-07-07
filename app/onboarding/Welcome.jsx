import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { auth } from '../config/Firebase'; // ✅ Make sure this path is correct
import styles from '../styles/welcome.style';

WebBrowser.maybeCompleteAuthSession();
const { height } = Dimensions.get('window');

export default function Welcome() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Auto-redirect if already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/onboarding/WelcomeScreen'); // change this to your home or onboarding screen
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/onboarding/MainDashboard'); // 🔄 Navigate to your next screen
    } catch (error) {
      console.error('Login error:', error.code);

      if (error.code === 'auth/user-not-found') {
        Alert.alert('User Not Found', 'No account found with this email. Please sign up.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Wrong Password', 'The password you entered is incorrect.');
      } else {
        Alert.alert('Login Failed', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.heading}>Welcome to Calmee</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.bottomSection}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.subheading}>Let's dive into your Account!</Text>

        <View style={styles.inputWrapper}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#aaa"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#aaa"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.primaryButton,
            (!email || !password) && styles.disabledButton,
          ]}
          onPress={signIn}
          disabled={!email || !password || loading}
        >
          <Text style={styles.primaryButtonText}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <View style={styles.actionButtons}>
          <Text style={styles.signupPrompt}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => router.push('/auth/Login')}
          >
            <Text style={styles.signinText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Privacy Policy | Terms of Service
        </Text>
      </ScrollView>
    </View>
  );
}
