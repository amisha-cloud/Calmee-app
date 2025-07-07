import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { useRouter } from 'expo-router';
import FooterNav from '../components/FooterNav';
import styles from '../componentstyles/statsScreen.style';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#E4E8FF',
  backgroundGradientTo: '#E4E8FF',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(86, 103, 253, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

export default function StatsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/onboarding/MainDashboard')}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Your Progress Stats</Text>
        </View>

        <Text style={styles.chartTitle}>Weekly Mood Trend</Text>

        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: [3, 4, 5, 2, 4, 5, 6], // mock mood values (1–5)
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            borderRadius: 16,
            marginBottom: 30,
          }}
        />

        {/* Add other cards or stats below if needed */}
      </ScrollView>

      <FooterNav />
    </View>
  );
}
