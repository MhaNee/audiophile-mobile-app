
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../components/Navbar';
import heroImg from '../assets/zx9(1).jpg'
import About from '../components/About'
import Footer from '../components/Footer'
import Categories from '../components/Category';
import { useCart } from '../context/CartContext';



const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  const relatedProducts = [
    {
      id: 1,
      name: 'ZX7 SPEAKER',
      image: require('@/app/assets/zx7(1).jpg'),
    },
    {
      id: 2,
      name: 'XX99 MARK I',
      image: require('@/app/assets/xx99mark1(1).jpg'),
    },
    {
      id: 3,
      name: 'XX59',
      image: require('@/app/assets/xx59(1).jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Navbar />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>

        {/* Product Image */}
        <View style={styles.productImageContainer}>
          <Image
            source={heroImg}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.newProduct}>NEW PRODUCT</Text>
          <Text style={styles.productName}>ZX9  SPEAKER</Text>
          <Text style={styles.productDescription}>
            Tailor your listening experience with bespoke dynamic drivers from the
            new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
            in noisy environments with its active noise cancellation feature.
          </Text>
          <Text style={styles.productPrice}>$ 2,999</Text>

          {/* Quantity and Add to Cart */}
          <View style={styles.actionRow}>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                onPress={decrementQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={incrementQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() =>
                addToCart(
                  { id: 'zx9-speaker', name: 'ZX9 SPEAKER', price: 2999 },
                  quantity
                )
              }
            >
              <Text style={styles.addButtonText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FEATURES</Text>
          <Text style={styles.featureText}>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for long listening
            sessions, these earphones deliver comfort and style.
          </Text>
          <Text style={styles.featureText}>
            A transmission delay of 2.2ms while maintaining a connection to up to
            30m means you can enjoy high quality playback without lag. Proprietary
            drivers ensure clear sound reproduction at all levels. Powered by
            rechargeable batteries, enjoy 8 hours of uninterrupted listening on a
            single charge.
          </Text>
        </View>

        {/* In The Box Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>IN THE BOX</Text>
          <View style={styles.boxItem}>
            <Text style={styles.boxQuantity}>2x</Text>
            <Text style={styles.boxItemName}>Earphone Unit</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={styles.boxQuantity}>6x</Text>
            <Text style={styles.boxItemName}>Multi-size Earplugs</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={styles.boxQuantity}>1x</Text>
            <Text style={styles.boxItemName}>User Manual</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={styles.boxQuantity}>1x</Text>
            <Text style={styles.boxItemName}>USB-C Charging Cable</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={styles.boxQuantity}>1x</Text>
            <Text style={styles.boxItemName}>Travel Pouch</Text>
          </View>
        </View>

        {/* Gallery */}
        <View style={styles.gallery}>
          <Image
            source={require('@/app/assets/image-gallery-1(1).jpg')}
            style={styles.galleryImageSmall}
            resizeMode="cover"
          />
          <Image
            source={require('@/app/assets/image-gallery-1(2).jpg')}
            style={styles.galleryImageSmall}
            resizeMode="cover"
          />
          <Image
            source={require('@/app/assets/image-gallery-1(3).jpg')}
            style={styles.galleryImageLarge}
            resizeMode="cover"
          />
        </View>

          {/* You May Also Like */}
              <View style={styles.relatedSection}>
                <Text style={styles.relatedTitle}>YOU MAY ALSO LIKE</Text>
                {relatedProducts.map((product) => (
                 <View key={product.id} style={styles.relatedProduct}>
                   <Image
                     source={product.image}
                     style={styles.relatedImage}
                     resizeMode="cover"
                   />
                   <Text style={styles.relatedName}>{product.name}</Text>
                   <TouchableOpacity style={styles.relatedButton}>
                     <Text style={styles.relatedButtonText}>SEE PRODUCT</Text>
                   </TouchableOpacity>
                 </View>
               ))}
             </View>
     
             {/* Category Cards */}
             <Categories /> 
    
        {/* About Section */}
        <About />

        {/* Footer */}
        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },

  // Back Button
  backButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  backText: {
    fontSize: 15,
    lineHeight: 25,
    color: '#000',
    opacity: 0.5,
  },

  // Product Image
  productImageContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  productImage: {
    width: '100%',
    height: 327,
    borderRadius: 8,
  },

  // Product Info
  productInfo: {
    paddingHorizontal: 24,
    marginBottom: 88,
  },
  newProduct: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 10,
    color: '#D87D4A',
    marginBottom: 24,
  },
  productName: {
    fontSize: 28,
    lineHeight: 38,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  productDescription: {
    fontSize: 15,
    lineHeight: 25,
    color: '#000',
    opacity: 0.5,
    marginBottom: 24,
  },
  productPrice: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 1.29,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 31,
  },

  // Quantity and Add to Cart
  actionRow: {
    flexDirection: 'row',
    gap: 16,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    width: 120,
    height: 48,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  quantityButton: {
    padding: 8,
  },
  quantityButtonText: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1,
    color: '#000',
    opacity: 0.25,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    flex: 1,
    backgroundColor: '#D87D4A',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Features Section
  section: {
    paddingHorizontal: 24,
    marginBottom: 88,
  },
  sectionTitle: {
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0.86,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  featureText: {
    fontSize: 15,
    lineHeight: 25,
    color: '#000',
    opacity: 0.5,
    marginBottom: 24,
  },

  // In The Box
  boxItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  boxQuantity: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#D87D4A',
    width: 40,
  },
  boxItemName: {
    fontSize: 15,
    lineHeight: 25,
    color: '#000',
    opacity: 0.5,
  },

  // Gallery
  gallery: {
    paddingHorizontal: 24,
    marginBottom: 120,
    gap: 20,
  },
  galleryImageSmall: {
    width: '100%',
    height: 174,
    borderRadius: 8,
  },
  galleryImageLarge: {
    width: '100%',
    height: 368,
    borderRadius: 8,
  },

  // Related Products
  relatedSection: {
    paddingHorizontal: 24,
    marginBottom: 120,
  },
  relatedTitle: {
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0.86,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  relatedProduct: {
    alignItems: 'center',
    marginBottom: 56,
  },
  relatedImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 32,
  },
  relatedName: {
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: 1.71,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 32,
  },
  relatedButton: {
    backgroundColor: '#D87D4A',
    paddingVertical: 15,
    paddingHorizontal: 32,
  },
  relatedButtonText: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Category Section
  categorySection: {
    paddingHorizontal: 24,
    marginBottom: 120,
    gap: 16,
  },
  categoryCard: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingTop: 52,
    paddingBottom: 22,
    alignItems: 'center',
    position: 'relative',
  },
  categoryImage: {
    width: 150,
    height: 104,
    marginTop: -90,
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 1.07,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 17,
  },
  shopLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shopText: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#000',
    opacity: 0.5,
  },

  // About Section
  aboutSection: {
    paddingHorizontal: 24,
    marginBottom: 120,
  },
  aboutTitle: {
    fontSize: 28,
    lineHeight: 38,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 32,
  },
  aboutHighlight: {
    color: '#D87D4A',
  },
  aboutDescription: {
    fontSize: 15,
    lineHeight: 25,
    color: '#000',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 40,
  },
  aboutImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },

  // Footer
  footer: {
    backgroundColor: '#101010',
    paddingHorizontal: 24,
    paddingBottom: 38,
  },
  footerBar: {
    height: 4,
    width: 101,
    backgroundColor: '#D87D4A',
    alignSelf: 'center',
    marginBottom: 48,
  },
  footerLogo: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 48,
  },
  footerLinks: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 48,
  },
  footerLink: {
    fontSize: 13,
    lineHeight: 25,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#fff',
  },
  footerDescription: {
    fontSize: 15,
    lineHeight: 25,
    color: '#fff',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 48,
  },
  footerCopyright: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#fff',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 48,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialIcon: {
    padding: 8,
  },
});
