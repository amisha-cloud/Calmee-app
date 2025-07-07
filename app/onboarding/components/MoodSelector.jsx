import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../componentstyles/moodSelector.style';

const moods = [
  { label: 'Happy', emoji: '😊' },
  { label: 'Sad', emoji: '😢' },
  { label: 'Neutral', emoji: '😐' },
  { label: 'Angry', emoji: '😠' },
  { label: 'Depressed', emoji: '😞' },
];

export default function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>How are you feeling today?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.label}
            style={[
              styles.moodButton,
              selectedMood === mood.label && styles.selectedMood,
            ]}
            onPress={() => setSelectedMood(mood.label)}
          >
            <Text style={styles.emoji}>{mood.emoji}</Text>
            <Text style={styles.label}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
