import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FooterNav from '../components/FooterNav';

export default function ArticleScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F7FB' }}>
      <LinearGradient
        colors={['#AEE2FF', '#93C6E0']}
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#4A3AFF" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#fff', marginTop: 10 }}>
          You Don’t Have to Please Everyone
        </Text>
        <Text style={{ fontSize: 14, color: '#f0f0f0', marginTop: 4 }}>
          Learn to say “no” with grace and “yes” with intention.
        </Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1527181152855-fc03fc7949c8',
          }}
          style={{
            width: '100%',
            height: 180,
            borderRadius: 16,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontStyle: 'italic',
            color: '#4A90E2',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          “Boundaries aren’t walls. They’re bridges to better relationships — with others and with yourself.”
        </Text>

        <Text style={{ fontSize: 16, color: '#444', lineHeight: 24, marginBottom: 16 }}>
          Have you ever said “yes” when your whole body wanted to say “no”? Maybe you agreed to something just to avoid conflict or disappointment — even if it meant compromising your own needs.
        </Text>

        <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
          What People-Pleasing Looks Like:
        </Text>

        <Text style={{ fontSize: 15, color: '#555', lineHeight: 24, marginBottom: 16 }}>
          • Saying yes when you’re already overwhelmed{'\n'}
          • Apologizing for things that aren’t your fault{'\n'}
          • Avoiding conflict even when something hurts you
        </Text>

        <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginTop: 20, marginBottom: 8 }}>
          The Truth:
        </Text>

        <Text style={{ fontSize: 15, color: '#555', lineHeight: 24 }}>
          • You are not responsible for how everyone else feels.{'\n'}
          • You are allowed to protect your peace even if it disappoints others.{'\n'}
          • When you constantly try to make everyone else happy, you end up neglecting your own needs. Ironically, people-pleasing doesn’t create real connection — it creates a version of you that isn’t fully honest or whole.
        </Text>
      </ScrollView>

      <FooterNav />
    </View>
  );
}