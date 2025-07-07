import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/purpose3.style';

const options3 = [
  'Journaling my thoughts',
  'Taking a walk or exercising',
  'Practicing meditation',
  'Listening to calming sounds/music'
];

export default function PurposeScreen3() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  // ✅ Get purpose1 and purpose2 from previous screen
  const { purpose1, purpose2 } = useLocalSearchParams();

  const handleNext = () => {
    if (selected === null) return;

    const selectedPurpose3 = options3[selected];

    // ✅ Push to PurposeScreen4 with all 3 previous answers
    router.push({
      pathname: '/onboarding/PurposeScreen4',
      params: {
        purpose1,
        purpose2,
        purpose3: selectedPurpose3,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image source={require('../../assets/images/purpose.png')} style={styles.illustration} />

      <Text style={styles.title}>How do you prefer to relax?</Text>

      {options3.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionBox} onPress={() => setSelected(index)}>
          <Text style={styles.optionText}>{option}</Text>
          <Ionicons
            name={selected === index ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="#6A5AE0"
          />
        </TouchableOpacity>
      ))}

      <Text style={styles.progress}>3/4</Text>

      <TouchableOpacity
        style={[styles.primaryButton, selected === null && styles.disabledButton]}
        onPress={handleNext}
        disabled={selected === null}
      >
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>

     {/* <TouchableOpacity onPress={() => router.push('/onboarding/PurposeScreen4')}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>*/}
    </View>
  );
}
