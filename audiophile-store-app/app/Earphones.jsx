import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';

export default function Earphones() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
          <Navbar />
    

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>EARPHONES</Text>
      </View>

      {/* YX1 Earphones */}
      <View style={styles.productSection}>
        {/* <Image
          source={require('../../assets/earphones/yx1.png')}
          style={styles.productImage}
          resizeMode="contain"
        /> */}
        <Text style={styles.newProduct}>NEW PRODUCT</Text>
        <Text style={styles.productTitle}>YX1 WIRELESS EARPHONES</Text>
        <Text style={styles.productDescription}>
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless
          Earphones. Enjoy incredible sound even in noisy environments with its active noise
          cancellation feature.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

      {/* Category Grid */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryCard} onPress={() => router.push('/headphones')}>
          {/* <Image
            source={require('../../assets/shared/headphones.png')}
            style={styles.categoryImage}
            resizeMode="contain"
          /> */}
          <Text style={styles.categoryTitle}>HEADPHONES</Text>
          <Text style={styles.shopLink}>SHOP {'>'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => router.push('/speakers')}>
          {/* <Image
            source={require('../../assets/shared/speakers.png')}
            style={styles.categoryImage}
            resizeMode="contain"
          /> */}
          <Text style={styles.categoryTitle}>SPEAKERS</Text>
          <Text style={styles.shopLink}>SHOP {'>'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard} onPress={() => router.push('/earphones')}>
          {/* <Image
            source={require('../../assets/shared/earphones.png')}
            style={styles.categoryImage}
            resizeMode="contain"
          /> */}
          <Text style={styles.categoryTitle}>EARPHONES</Text>
          <Text style={styles.shopLink}>SHOP {'>'}</Text>
        </TouchableOpacity>
      </View>

    
      {/* About Section */}
      <About />

      {/* Footer */}

     <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 40,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2,
  },
  productSection: {
    padding: 24,
    alignItems: 'center',
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 24,
  },
  newProduct: {
    color: '#D87D4A',
    fontSize: 13,
    letterSpacing: 2,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 12,
  },
  productDescription: {
    textAlign: 'center',
    color: '#7B7B7B',
    fontSize: 14,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#D87D4A',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
  },
  categories: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  categoryCard: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#F1F1F1',
    paddingVertical: 20,
    borderRadius: 8,
  },
  categoryImage: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  shopLink: {
    color: '#7B7B7B',
    fontWeight: '700',
    marginTop: 4,
  },
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
