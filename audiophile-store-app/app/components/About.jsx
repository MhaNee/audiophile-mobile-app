import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AboutSection() {
  return (
    <View style={styles.aboutSection}>
      <Text style={styles.aboutTitle}>
        BRINGING YOU THE <Text style={{ color: '#D87D4A' }}>BEST</Text> AUDIO GEAR
      </Text>
      <Text style={styles.aboutText}>
        Located at the heart of New York City, Audiophile is the premier store for high-end
        headphones, earphones, speakers, and audio accessories. Visit our showroom and luxury
        demo rooms to experience the finest audio quality.
      </Text>
      {/* <Image
        source={require('../assets/shared/about.jpg')}
        style={styles.aboutImage}
        resizeMode="cover"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  aboutSection: {
    padding: 24,
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  aboutText: {
    color: '#7B7B7B',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 24,
  },
  aboutImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
});
