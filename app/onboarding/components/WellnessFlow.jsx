import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/mainDashboard.style';

const wellnessFlow = [
  {
    title: 'First Breath Meditation',
    desc: '2 minutes of deep breathing',
    img: require('../../../assets/images/flow1.png'),
  },
  {
    title: 'Calm Your Thoughts',
    desc: 'Write 5 things you’re grateful for',
    img: require('../../../assets/images/flow2.png'),
  },
  {
    title: 'Digital Detox Break',
    desc: 'Take a 30-minute break from screens',
    img: require('../../../assets/images/flow3.png'),
  },
  {
    title: 'Evening Calm Down',
    desc: 'Relax with calming music',
    img: require('../../../assets/images/flow4.png'),
  },
  {
    title: 'One Gentle Gesture',
    desc: 'Do one small kind act today',
    img: require('../../../assets/images/flow5.png'),
  },
];

export default function WellnessFlow({ completedTasks }) {
  return (
    <View style={styles.wellnessWrapper}>
      <Text style={styles.sectionTitle}>
        Your Wellness Flow for Today ({completedTasks}/{wellnessFlow.length})
      </Text>
      {wellnessFlow.map((item, index) => (
        <View key={index} style={styles.timelineItem}>
          <View style={styles.timelineLine} />
          <View style={styles.flowCard}>
            <Image source={item.img} style={styles.flowImage} />
            <View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
