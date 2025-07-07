import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/purpose1.style';

const options1 = [
  'Sleep better and feel rested',
  'Build healthy self-care habits',
  'Manage my emotions better',
  'To feel less stressed and anxious'
];

export default function PurposeScreen1() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected === null) return;

    const selectedPurpose = options1[selected];

    // ✅ Pass selected answer to PurposeScreen2
    router.push({
      pathname: '/onboarding/PurposeScreen2',
      params: { purpose1: selectedPurpose }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/purpose.png')}
        style={styles.illustration}
      />

      <Text style={styles.title}>What brings you to Calmee?</Text>

      {options1.map((option, index) => (
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

      <Text style={styles.progress}>1/4</Text>

      <TouchableOpacity
        style={[styles.primaryButton, selected === null && styles.disabledButton]}
        onPress={handleNext}
        disabled={selected === null}
      >
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity onPress={() => router.push('/onboarding/PurposeScreen2')}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>*/}
    </View>
  );
}
