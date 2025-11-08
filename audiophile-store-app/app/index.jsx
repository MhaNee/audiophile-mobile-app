
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Category from './components/Category';


const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>

      <Navbar />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          {/*
          <Image
            source={require('../../assets/home/mobile/image-header.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          */}
          <View style={styles.heroOverlay}>
            <Text style={styles.newProduct}>NEW PRODUCT</Text>
            <Text style={styles.heroTitle}>XX99 MARK II{'\n'}HEADPHONES</Text>
            <Text style={styles.heroDescription}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>
            <TouchableOpacity
              style={styles.heroButton}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  productId: 'xx99mark2',
                  category: 'headphones',
                })
              }
            >
              <Text style={styles.heroButtonText}>SEE PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Cards */}
        <Category />


        {/* ZX9 Speaker Feature - Orange Background */}
        <View style={styles.zx9Section}>
          <View style={styles.zx9Container}>
            {/*
            <Image
              source={require('../../assets/home/mobile/image-speaker-zx9.png')}
              style={styles.zx9Image}
              resizeMode="contain"
            />
            */}
            <Text style={styles.zx9Title}>ZX9{'\n'}SPEAKER</Text>
            <Text style={styles.zx9Description}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Text>
            <TouchableOpacity
              style={styles.zx9Button}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  productId: 'zx9',
                  category: 'speakers',
                })
              }
            >
              <Text style={styles.zx9ButtonText}>SEE PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ZX7 Speaker Feature - Image Background */}
        <View style={styles.zx7Section}>
          {/*
          <Image
            source={require('../../assets/home/mobile/image-speaker-zx7.jpg')}
            style={styles.zx7Image}
            resizeMode="cover"
          />
          */}
          <View style={styles.zx7Content}>
            <Text style={styles.zx7Title}>ZX7 SPEAKER</Text>
            <TouchableOpacity
              style={styles.zx7Button}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  productId: 'zx7',
                  category: 'speakers',
                })
              }
            >
              <Text style={styles.zx7ButtonText}>SEE PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* YX1 Earphones Feature - Split Layout */}
        <View style={styles.yx1Section}>
          {/*
          <Image
            source={require('../../assets/home/mobile/image-earphones-yx1.jpg')}
            style={styles.yx1Image}
            resizeMode="cover"
          />
          */}
          <View style={styles.yx1Content}>
            <Text style={styles.yx1Title}>YX1 EARPHONES</Text>
            <TouchableOpacity
              style={styles.yx1Button}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  productId: 'yx1',
                  category: 'earphones',
                })
              }
            >
              <Text style={styles.yx1ButtonText}>SEE PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>

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

  // Hero Section
  hero: {
    position: 'relative',
    height: 600,
    backgroundColor: '#191919',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  newProduct: {
    color: '#999',
    fontSize: 14,
    letterSpacing: 10,
    marginBottom: 16,
    textAlign: 'center',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 24,
  },
  heroDescription: {
    color: '#ccc',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 24,
  },
  heroButton: {
    backgroundColor: '#D87D4A',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // Category Section
  categorySection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 16,
  },
  categoryCard: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingVertical: 22,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 150,
    height: 120,
    marginTop: -40,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1.07,
    marginBottom: 8,
  },
  shopLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shopText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    opacity: 0.5,
    letterSpacing: 1,
  },

  // ZX9 Speaker Section
  zx9Section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  zx9Container: {
    backgroundColor: '#D87D4A',
    borderRadius: 8,
    paddingVertical: 55,
    paddingHorizontal: 24,
    alignItems: 'center',
    overflow: 'hidden',
  },
  zx9Image: {
    width: 172,
    height: 207,
    marginBottom: 32,
  },
  zx9Title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 24,
  },
  zx9Description: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    opacity: 0.75,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  zx9Button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 32,
  },
  zx9ButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // ZX7 Speaker Section
  zx7Section: {
    marginHorizontal: 24,
    marginBottom: 24,
    height: 320,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  zx7Image: {
    width: '100%',
    height: '100%',
  },
  zx7Content: {
    position: 'absolute',
    top: 101,
    left: 24,
  },
  zx7Title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    marginBottom: 32,
  },
  zx7Button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 32,
    alignSelf: 'flex-start',
  },
  zx7ButtonText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // YX1 Earphones Section
  yx1Section: {
    paddingHorizontal: 24,
    marginBottom: 120,
    gap: 24,
  },
  yx1Image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  yx1Content: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    padding: 41,
    paddingLeft: 24,
  },
  yx1Title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    marginBottom: 32,
  },
  yx1Button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 32,
    alignSelf: 'flex-start',
  },
  yx1ButtonText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // About Section
  aboutSection: {
    paddingHorizontal: 24,
    marginBottom: 120,
    alignItems: 'center',
  },
  aboutImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 40,
  },
  aboutTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 38,
    letterSpacing: 1,
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
  },

  // Footer
  footer: {
    backgroundColor: '#101010',
    paddingTop: 0,
    paddingBottom: 38,
    paddingHorizontal: 24,
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
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  footerDescription: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    opacity: 0.5,
    marginBottom: 48,
  },
  footerCopyright: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.5,
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