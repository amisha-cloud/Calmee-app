import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FooterNav from '../components/FooterNav';

export default function PromptedJournalingScreen() {
  const router = useRouter();

  const prompts = [
    {
      title: 'Self-Worth',
      subtitle: 'What do I value most about myself?',
      image: require('../../../assets/images/selfworth.png'),
      screen: 'SelfWorthScreen',
    },
    {
      title: 'Life Purpose',
      subtitle: 'What brings me energy and meaning in life?',
      image: require('../../../assets/images/lifepurpose.png'),
      screen: 'LifePurposeScreen',
    },
    {
      title: 'Gratitude',
      subtitle: 'What small joy did I overlook this week?',
      image: require('../../../assets/images/gratitude.png'),
      screen: 'GratitudeScreen',
    },
    {
      title: 'Healing from Past',
      subtitle: 'What part of my past still feels unhealed?',
      image: require('../../../assets/images/healingpast.png'),
      screen: 'HealingPastScreen',
    },
  ];

  return (
    <View style={{  paddingTop:50, flex: 1, backgroundColor: '#F7F7FB' }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
          <Ionicons name="arrow-back" size={24} color="#6A5AE0" />
        </TouchableOpacity>

        <Text style={{ fontSize: 24, fontWeight: '700', color: '#333', marginBottom: 20 }}>
          Prompted Journaling
        </Text>

        {prompts.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(`/onboarding/Screen/${item.screen}`)}
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              padding: 16,
              borderRadius: 12,
              alignItems: 'center',
              marginBottom: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 48, height: 48, marginRight: 16, resizeMode: 'contain' }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>{item.title}</Text>
              <Text style={{ fontSize: 13, color: '#777', marginTop: 4 }}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FooterNav />
    </View>
  );
}
