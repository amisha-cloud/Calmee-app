import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/screen3.style';

const Screen3 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.skipContainer} onPress={() => router.push('/onboarding/Welcome')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/screen3.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Watch Yourself Grow</Text>

      <Text style={styles.description}>
        Understand your emotional patterns with mood trends, growth areas, and visual insights — because healing is personal, and so is your progress.
      </Text>

      <View style={styles.navigationSection}>
        
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/onboarding/Welcome')}>
          <Text style={styles.continueText}>Let's Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Screen3;
