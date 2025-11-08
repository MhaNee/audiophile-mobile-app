import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerLogo}>audiophile</Text>

      <View style={styles.footerLinks}>
        <Text style={styles.footerLink}>Home</Text>
        <Text style={styles.footerLink}>Headphones</Text>
        <Text style={styles.footerLink}>Speakers</Text>
        <Text style={styles.footerLink}>Earphones</Text>
      </View>

      <Text style={styles.footerText}>
        Audiophile is your one-stop destination for premium audio products. Visit our store or demo
        facility to experience sound perfection.
      </Text>

      <Text style={styles.footerCopyright}>
        Copyright 2021. All Rights Reserved
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  footerLogo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  footerLink: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  footerText: {
    color: '#7B7B7B',
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 12,
  },
  footerCopyright: {
    color: '#7B7B7B',
    fontSize: 12,
  },
});
