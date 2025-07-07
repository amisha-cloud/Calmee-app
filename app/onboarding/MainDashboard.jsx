import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/mainDashboard.style';
import BadgeModal from './components/BadgeModal';
import FooterNav from './components/FooterNav';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import ProgressTracker from './components/ProgressTracker';
import ThoughtCarousel from './components/Thought';
import WellnessFlow from './components/WellnessFlow';

export default function MainDashboard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [lastMilestone, setLastMilestone] = useState(0);

  const totalTasks = 5;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  useEffect(() => {
    if (
      (progressPercent >= 100 && lastMilestone < 100) ||
      (progressPercent >= 75 && lastMilestone < 75) ||
      (progressPercent >= 50 && lastMilestone < 50)
    ) {
      setBadgeVisible(true);

      if (progressPercent >= 100) setLastMilestone(100);
      else if (progressPercent >= 75) setLastMilestone(75);
      else if (progressPercent >= 50) setLastMilestone(50);
    }
  }, [progressPercent]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
        <ThoughtCarousel />
        <WellnessFlow completedTasks={completedTasks} />
        <ProgressTracker progressPercent={progressPercent} />

        <View style={localStyles.taskWrapper}>
          <Text style={localStyles.taskTitle}>Complete a task:</Text>
          {[1, 2, 3, 4, 5].map((task) => (
            <TouchableOpacity
              key={task}
              style={[
                localStyles.taskButton,
                {
                  backgroundColor:
                    completedTasks >= task ? '#5667FD' : '#ccc',
                },
              ]}
              disabled={completedTasks >= task}
              onPress={() => setCompletedTasks(task)}
            >
              <Text style={localStyles.taskButtonText}>
                Complete Task {task}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BadgeModal visible={badgeVisible} onClose={() => setBadgeVisible(false)} />
      <FooterNav />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  taskWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 100, // to avoid overlap with footer
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskButton: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
