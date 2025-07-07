import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../componentstyles/Header.styles';

export default function Header() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning ☀️';
    if (hour < 18) return 'Good Afternoon 🌤️';
    return 'Good Evening 🌙';
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/meditate1.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'transparent']}
          style={styles.gradientOverlay}
        />

    
        <View style={styles.headerRow}>
          <View style={styles.side}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.center}>
            <Animated.Text
              style={[
                styles.middleText,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY }],
                },
              ]}
            >
              Welcome to Calmee
            </Animated.Text>
          </View>

          <View style={styles.sideRight}>
            <TouchableOpacity onPress={() => alert('Notifications pressed!')}>
              <FontAwesome name="bell" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Achievements pressed!')}>
              <View style={styles.badgeWrapper}>
                <FontAwesome name="trophy" size={24} color="#fff" />
                <View style={styles.badgeCount}>
                  <Text style={styles.badgeText}>5</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.title}>{getGreeting()}</Text>
          <Text style={styles.subtitle}>Find your inner peace</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
