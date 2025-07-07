import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { auth, db } from '../../config/Firebase';
import FooterNav from '../components/FooterNav';
import styles from '../componentstyles/profileScreen.style';

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [nickname, setNickname] = useState('');
  const [uid, setUid] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log('✅ Logged in user:', currentUser.email);
        console.log('🔥 Current UID:', currentUser.uid);
        setUser(currentUser);
        setUid(currentUser.uid);

        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);

          console.log('📄 Document exists:', docSnap.exists());

          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('📦 Firestore data:', data);
            console.log('🧠 Nickname field:', data.nickname);
            setNickname(data.nickname || '');
          } else {
            console.warn('⚠️ No user document found in Firestore');
          }
        } catch (error) {
          console.error('❌ Error fetching user document:', error);
        }
      } else {
        console.log('❌ No user signed in');
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ One-time setter to test Firestore nickname write (optional)
  const setTestNickname = async () => {
    try {
      if (!uid) {
        Alert.alert('Error', 'User not signed in yet.');
        return;
      }

      const testRef = doc(db, 'userProfiles', uid);
      await setDoc(testRef, { nickname: 'Lalitha' }, { merge: true });
      Alert.alert('Nickname Set', 'Nickname written to Firestore!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await signOut(auth);
            router.replace('/onboarding/Welcome');
          } catch (error) {
            Alert.alert('Logout Error', error.message);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/onboarding/MainDashboard')}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>

          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.avatar}
          />

          {/* Nickname and Email Display */}
          <Text style={styles.name}>{nickname || 'New User'}</Text>
          <Text style={styles.username}>{user?.email || 'user@example.com'}</Text>

          {/* 🔧 Debugging nickname output 
          <Text style={{ color: 'red', fontSize: 12, marginTop: 6 }}>
            DEBUG: Nickname = {nickname || 'null'}
          </Text>

          
          <TouchableOpacity
            onPress={setTestNickname}
            style={{
              backgroundColor: '#eee',
              padding: 8,
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>👨‍🔧 Write Test Nickname to Firestore</Text>
          </TouchableOpacity>*/}
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <FontAwesome5 name="calendar-day" size={20} color="#5667FD" />
            <Text style={styles.statValue}>90</Text>
            <Text style={styles.statLabel}>Calmee days</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="flame" size={20} color="#5667FD" />
            <Text style={styles.statValue}>35</Text>
            <Text style={styles.statLabel}>Total Streaks</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="time" size={20} color="#5667FD" />
            <Text style={styles.statValue}>456m</Text>
            <Text style={styles.statLabel}>Focused Time</Text>
          </View>
          <View style={styles.statBox}>
            <MaterialIcons name="self-improvement" size={20} color="#5667FD" />
            <Text style={styles.statValue}>50</Text>
            <Text style={styles.statLabel}>Reflection Sessions</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push('/onboarding/MoodStat')}
          >
            <Ionicons name="bar-chart" size={20} color="#5667FD" />
            <Text style={styles.menuText}>Mood Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="trophy" size={20} color="#5667FD" />
            <Text style={styles.menuText}>Achievements & Rewards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="wallet" size={20} color="#5667FD" />
            <Text style={styles.menuText}>Subscription</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <View style={{ paddingHorizontal: 24, marginTop: 10 }}>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
            <Text style={[styles.menuText, { color: '#FF6B6B' }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <FooterNav />
    </View>
  );
}
