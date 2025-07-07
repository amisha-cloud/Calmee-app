import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Meditation() {
  const router = useRouter();

  const categories = [
    { emoji: '🌿', title: 'For Beginners' },
    { emoji: '😊', title: 'For Relaxation & Calm' },
    { emoji: '🌙', title: 'For Sleep' },
    { emoji: '💭', title: 'For Anxiety & Stress' },
    { emoji: '💖', title: 'For Self-Love' },
  ];

  return (
    <View style={{paddingTop:50, flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 40, paddingBottom: 100 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#6A5AE0" />
        </TouchableOpacity>

        <Text style={{marginTop:6, fontSize: 20, fontWeight: '600', color: '#222', marginBottom: 6 }}>
          Meditation
        </Text>
        <Text style={{ fontSize: 14, color: '#777', marginBottom: 20 }}>
          For every moment
        </Text>

        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              borderWidth: 1,
              borderColor: '#FFDDC1',
              paddingVertical: 14,
              paddingHorizontal: 18,
              borderRadius: 12,
              marginBottom: 12,
              backgroundColor: '#FFF9F4',
            }}
            onPress={() =>
              router.push(
                `/meditation/${item.title.replace(/ & | /g, '-').toLowerCase()}`
              )
            }
          >
            <Text style={{ fontSize: 16, color: '#333' }}>
              {item.emoji} {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
