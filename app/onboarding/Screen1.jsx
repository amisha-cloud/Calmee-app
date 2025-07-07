import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/screen1.style';

export default function Screen1() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.skipButton} onPress={() => router.push('/onboarding/Welcome')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.topSection}>
        <Image source={require('../../assets/images/screen1.png')} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.heading}>Your Mental Health{'\n'}made Personal</Text>

      <Text style={styles.description}>
        Get wellness plans crafted for your needs — from mood support to self-care routines.
      </Text>

      <View style={styles.navigationSection}>
        
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/onboarding/Screen2')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
