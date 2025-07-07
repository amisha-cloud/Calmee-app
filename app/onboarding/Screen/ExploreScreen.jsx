import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FooterNav from '../components/FooterNav';
import styles from './explore.style';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View style={{paddingTop:50, flex: 1, backgroundColor: '#F0F4F9' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/onboarding/MainDashboard')}>
            <Ionicons name="arrow-back" size={24} color="#4A3AFF" />
            <Text style={{ marginLeft: 8, fontSize: 16, color: '#333' }}>Explore</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Daily Journal</Text>

        <TouchableOpacity onPress={() => router.push('/onboarding/Screen/PasscodeScreen?next=BlankPage')}>
          <LinearGradient colors={['#AEE2FF', '#93C6E0']} style={styles.journalCard}>
            <Text style={styles.journalText}>Blank Page</Text>
            <Text style={styles.journalSubText}>Just Start Writing</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/onboarding/Screen/PasscodeScreen?next=PromptedJournaling')}>
          <LinearGradient colors={['#FFE0C7', '#EED6D3']} style={styles.journalCard}>
            <Text style={styles.journalText}>Prompted Journaling</Text>
            <Text style={styles.journalSubText}>Choose a topic to start writing</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Self-care Articles</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all &gt;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.articleCard, { backgroundColor: '#FFD6A5' }]}
            onPress={() => router.push('/onboarding/Screen/ArticleScreen')}
          >
            <Text style={styles.articleLabel}>Read and Learn</Text>
            <Text style={styles.articleTitle}>You Don’t Have to Please Everyone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.articleCard, { backgroundColor: '#AEE2FF' }]}>
            <Text style={styles.articleLabel}>Read and Learn</Text>
            <Text style={styles.articleTitle}>Set Boundaries Without Feeling Mean</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Melodies to relax</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all &gt;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { title: 'Rest & Relax', duration: '20min' },
            { title: 'Peaceful Vibes', duration: '12min' },
            { title: 'Dreamy Nights', duration: '15min' },
            { title: 'Calm Moments', duration: '20min' },
          ].map((melody, index) => (
            <TouchableOpacity key={index} style={styles.melodyCard}>
              <Text style={styles.melodyTitle}>{melody.title}</Text>
              <Text style={styles.melodyDuration}>{melody.duration}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <FooterNav />
    </View>
  );
}