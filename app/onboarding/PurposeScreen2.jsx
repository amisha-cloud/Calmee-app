import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/purpose1.style';

const options = [
  'Practicing self-love & confidence',
  'Finding inner peace',
  'Improving sleep quality',
  'Managing stress & anxiety',
];

export default function PurposeScreen2() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  // ✅ Get purpose1 from previous screen
  const { purpose1 } = useLocalSearchParams();

  const handleNext = () => {
    if (selected === null) return;

    const selectedPurpose2 = options[selected];

    // ✅ Push to PurposeScreen3 with both purpose1 and purpose2
    router.push({
      pathname: '/onboarding/PurposeScreen3',
      params: {
        purpose1,
        purpose2: selectedPurpose2,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image source={require('../../assets/images/purpose.png')} style={styles.illustration} />

      <Text style={styles.title}>What’s your biggest mental health wellness goal?</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionBox}
          onPress={() => setSelected(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
          <Ionicons
            name={selected === index ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="#6A5AE0"
          />
        </TouchableOpacity>
      ))}

      <Text style={styles.progress}>2/4</Text>

      <TouchableOpacity
        style={[styles.primaryButton, selected === null && styles.disabledButton]}
        onPress={handleNext}
        disabled={selected === null}
      >
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity onPress={() => router.push('/onboarding/PurposeScreen3')}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>*/}
    </View>
  );
}
