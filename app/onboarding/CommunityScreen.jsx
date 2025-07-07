import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FooterNav from './components/FooterNav'; // relative to onboarding folder

export default function CommunityScreen() {
  const router = useRouter();

  const posts = [
    {
      id: 1,
      name: '_Jane',
      profile: require('../../assets/images/women.png'),
      image: require('../../assets/images/women.png'),
      text: 'You don’t have to respond instantly. Give yourself permission to pause.',
    },
    {
      id: 2,
      name: 'Martin_',
      profile: require('../../assets/images/man.png'),
      image: require('../../assets/images/man.png'),
      text: 'Feeling overwhelmed? Try naming 3 things you can see, hear, and feel right now.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Community</Text>

        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.profileRow}>
              <Image source={post.profile} style={styles.profileImage} />
              <Text style={styles.name}>{post.name}</Text>
            </View>

            <Image source={post.image} style={styles.postImage} />

            <View style={styles.iconRow}>
              <View style={styles.iconLeft}>
                <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                <Ionicons name="chatbubble-outline" size={20} color="#000" style={styles.icon} />
                <Feather name="send" size={20} color="#000" style={styles.icon} />
              </View>
              <FontAwesome name="bookmark-o" size={20} color="#000" />
            </View>

            <Text style={styles.postText}>
              <Text style={styles.name}>{post.name} </Text>
              {post.text} <Text style={styles.more}>...more</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
      <FooterNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 100,
  },
  backArrow: {
    fontSize: 22,
    color: '#333',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: '#222',
  },
  postContainer: {
    marginBottom: 30,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  iconLeft: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  postText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  more: {
    color: '#888',
  },
});
