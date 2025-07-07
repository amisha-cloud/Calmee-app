import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/screen2.style';

export default function Screen2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push('/onboarding/Welcome')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/screen2.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.heading}>Your Calm Corner,{'\n'}all in One Place</Text>

      <Text style={styles.description}>
        From guided meditations to journaling, from affirmations to helpful tips — explore tools that help you breathe easier, sleep better, and feel more in control.
      </Text>

      <View style={styles.navigationSection}>
        <View style={styles.dotsContainer}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push('/onboarding/Screen3')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
