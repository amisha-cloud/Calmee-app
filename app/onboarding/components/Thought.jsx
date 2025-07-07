import { FlatList, Image, Text, View } from 'react-native';
import styles from '../../styles/mainDashboard.style';

const thoughts = [
  {
    text: 'Joy is not always loud. Sometimes, it’s just feeling safe in your own skin.',
    img: require('../../../assets/images/thought.png'),
  },
  {
    text: 'You are doing your best, and that is enough.',
    img: require('../../../assets/images/thought.png'),
  },
  {
    text: 'Peace begins when you choose not to let others control your emotions.',
    img: require('../../../assets/images/thought.png'),
  },
];

export default function Thought() {
  return (
    <View style={styles.thoughtWrapper}> 
      <Text style={styles.sectionTitle}>Thought of the day</Text>
      <FlatList
        data={thoughts}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.thoughtCard}>
            <Image source={item.img} style={styles.thoughtImage} />
            <Text style={styles.quoteText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
