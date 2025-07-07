import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../config/Firebase'; // ✅ Make sure this path is correct
import styles from './login.style';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    if (!agree) {
      Alert.alert('Please accept the Terms & Conditions');
      return;
    }

    if (!email || !password) {
      Alert.alert('Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Navigate to Welcome.jsx directly (root level)
      router.push('onboarding/WelcomeScreen');
    } catch (error) {
      console.error('Signup Error:', error.message);
      Alert.alert('Signup Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.heading}>Join Calmee Today!</Text>
      <Text style={styles.subtext}>This space is all yours.</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
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
        <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.checkboxWrapper} onPress={() => setAgree(!agree)}>
        <Ionicons
          name={agree ? 'checkbox' : 'square-outline'}
          size={20}
          color={agree ? '#6A5AE0' : '#aaa'}
        />
        <Text style={styles.checkboxText}>
          I agree to Calmee <Text style={styles.link}>Terms & Conditions</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.loginButton, !(email && password && agree) && styles.disabledButton]}
        onPress={signIn}
        disabled={!(email && password && agree) || loading}
      >
        <Text style={styles.loginText}>
          {loading ? 'Signing up...' : 'Sign in'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.signupPrompt}>
        Already have an account?{' '}
        <Text style={styles.signupLink} onPress={() => router.push('onboarding/Welcome')}>
          Sign in
        </Text>
      </Text>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialIconButton}>
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <FontAwesome name="apple" size={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
