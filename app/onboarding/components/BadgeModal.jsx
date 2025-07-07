import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import styles from '../../styles/mainDashboard.style';

export default function BadgeModal({ visible, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackdrop}>
        <View style={styles.badgeModal}>
          <Text style={styles.badgeTitle}>Congrats, Ana!</Text>
          <Image source={require('../../../assets/images/badge.png')} style={styles.badgeImage} />
          <Text style={styles.badgeSubtitle}>Badge unlocked!</Text>
          <Text style={styles.badgeDescription}>Your journey to Calmee just leveled up.</Text>
          <TouchableOpacity style={styles.continueButton} onPress={onClose}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
