import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/mainDashboard.style';

export default function FooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { route: '/onboarding/MainDashboard', icon: 'home', type: 'Ionicons' },
    { route: '/onboarding/components/ChatScreen', icon: 'chatbubble-ellipses-outline', type: 'Ionicons' },
    { route: '/onboarding/MeditationScreen', icon: 'self-improvement', type: 'MaterialIcons' },
    { route: '/onboarding/CommunityScreen', icon: 'people', type: 'Ionicons' },
    { route: '/onboarding/Screen/ExploreScreen', icon: 'star', type: 'Ionicons' },
    { route: '/onboarding/components/ProfileScreen', icon: 'person-circle', type: 'Ionicons' },
  ];

  const isActive = (route) => pathname === route;

  return (
    <View style={styles.footer}>
      {tabs.map((tab, index) => {
        const isCurrent = isActive(tab.route);

        return (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(tab.route)}
            style={footerStyles.iconContainer}
          >
            {tab.type === 'Ionicons' ? (
              <Ionicons name={tab.icon} size={24} color={isCurrent ? '#5667FD' : '#999'} />
            ) : (
              <MaterialIcons name={tab.icon} size={24} color={isCurrent ? '#5667FD' : '#999'} />
            )}
            {isCurrent && <View style={footerStyles.underline} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const footerStyles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  underline: {
    marginTop: 2,
    height: 3,
    width: 22,
    backgroundColor: '#5667FD',
    borderRadius: 2,
  },
});
