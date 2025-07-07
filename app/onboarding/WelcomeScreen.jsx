import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/welcome1.style';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Take a deep breath....</Text>
      <Image source={require('../../assets/images/meditate.jpg')} style={styles.illustration} />
      <Text style={styles.description}>A few questions to make Calmee your perfect space.</Text>

      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/onboarding/PurposeScreen1')}>
        <Text style={styles.primaryButtonText}>I'm ready</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity onPress={() => router.push('/onboarding/NicknameScreen')}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>*/}
    </View>
  );
}
