import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/purpose4.style';

const options4 = [
  'Feeling overwhelmed or burnout',
  'Negative thoughts & overthinking',
  'Difficulty in expressing emotions',
  'Trouble sleeping'
];

export default function PurposeScreen4() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  // ✅ Get previous 3 answers
  const { purpose1, purpose2, purpose3 } = useLocalSearchParams();

  const handleNext = () => {
    if (selected === null) return;
    const purpose4 = options4[selected];

    // ✅ Pass all 4 purposes to NicknameScreen
    router.push({
      pathname: '/onboarding/NicknameScreen',
      params: {
        purpose1,
        purpose2,
        purpose3,
        purpose4,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image source={require('../../assets/images/purpose.png')} style={styles.illustration} />

      <Text style={styles.title}>What challenges do you face the most?</Text>

      {options4.map((option, index) => (
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

      <Text style={styles.progress}>4/4</Text>

      <TouchableOpacity
        style={[styles.primaryButton, selected === null && styles.disabledButton]}
        onPress={handleNext}
        disabled={selected === null}
      >
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>

     {/* <TouchableOpacity onPress={() => router.push('/onboarding/NicknameScreen')}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>*/}
    </View>
  );
}
