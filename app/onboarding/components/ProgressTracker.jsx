import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/mainDashboard.style';

export default function ProgressTracker({ progressPercent }) {
  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Text style={styles.sectionTitle}>Your Progress</Text>

      <View style={styles.progressCircle}>
        <Text style={styles.progressPercent}>{progressPercent}%</Text>
        <Text style={styles.progressLabel}>of the weekly plan completed</Text>
      </View>

      <Text style={styles.progressBreakdown}>
        Meditation • Breathing • Journaling • Reflection
      </Text>
    </View>
  );
}
