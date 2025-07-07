import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const moods = [
  { label: 'Very Happy', emoji: '😄' },
  { label: 'Happy', emoji: '😊' },
  { label: 'Neutral', emoji: '😐' },
  { label: 'Sad', emoji: '😔' },
  { label: 'Very Sad', emoji: '☹️' },
];

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const moodBarMoods = ['😄', '☹️', '😜', '😊', '😍', '😐', '☹️'];
const moodBars = [5, 3, 2, 3, 2, 1, 1];

export default function MoodStats() {
  const [selectedMood, setSelectedMood] = useState(3);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Mood Stats</Text>

        <Text style={styles.sectionTitle}>How are you feeling today?</Text>
        <View style={styles.moodRow}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedMood(index)}
              style={[styles.moodButton, selectedMood === index && styles.selectedMood]}
            >
              <Text style={styles.emoji}>{mood.emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.moodLabel}>{moods[selectedMood].label}</Text>

        <Text style={styles.sectionTitle}>Weekly overview</Text>
        <View style={styles.weekRow}>
          {weekDays.map((day, idx) => (
            <View key={idx} style={styles.dayCard}>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.dayEmoji}>{moodBarMoods[idx]}</Text>
              <Text style={styles.dayNum}>{idx + 1}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Monthly mood record</Text>
        <View style={styles.barChart}>
          {moodBars.map((value, idx) => (
            <View key={idx} style={styles.barItem}>
              <View style={[styles.bar, { height: value * 25 }]} />
              <Text style={styles.barEmoji}>{moodBarMoods[idx]}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity>
          <Text style={styles.link}>View full insights ›</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#F4F6FF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
  },
  moodRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  moodButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  selectedMood: {
    backgroundColor: '#D0D6FF',
  },
  emoji: {
    fontSize: 22,
  },
  moodLabel: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  dayCard: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 14,
    width: 44,
    alignItems: 'center',
    elevation: 2,
  },
  dayText: {
    fontSize: 10,
    color: '#666',
  },
  dayEmoji: {
    fontSize: 18,
    marginVertical: 4,
  },
  dayNum: {
    fontSize: 10,
    color: '#999',
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 150,
    marginVertical: 20,
  },
  barItem: {
    alignItems: 'center',
  },
  bar: {
    width: 20,
    backgroundColor: '#D37BFF',
    borderRadius: 6,
  },
  barEmoji: {
    marginTop: 4,
    fontSize: 16,
  },
  link: {
    textAlign: 'right',
    color: '#5667FD',
    fontSize: 13,
    marginTop: -10,
  },
});
