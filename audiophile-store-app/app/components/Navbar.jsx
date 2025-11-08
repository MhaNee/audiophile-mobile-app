import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnim] = useState(new Animated.Value(0));
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    Animated.timing(menuAnim, {
      toValue: menuOpen ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const dropdownTranslate = menuAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0], // slide down
  });

  return (
    <View style={{ zIndex: 10 }}>
      {/* Navbar */}
      <View style={styles.container}>
      
         {/* Hamburger menu */}
          <TouchableOpacity style={styles.iconButton} onPress={toggleMenu}>
            <Icon name={menuOpen ? 'close-outline' : 'menu-outline'} size={28} color="#000" />
          </TouchableOpacity>
        

        {/* Centered logo */}
        <Text style={styles.logo}>audiophile</Text>

        {/* Right icons */}
        <View style={styles.rightIcons}>
          {/* Cart icon */}
          <TouchableOpacity style={styles.iconButton} onPress={() => setCartOpen(true)}>
            <Icon name="cart-outline" size={22} color="#000" />
          </TouchableOpacity>

         
        </View>
      </View>

      {/* Dropdown menu */}
      {menuOpen && (
        <Animated.View style={[styles.dropdown, { transform: [{ translateY: dropdownTranslate }] }]}>
         
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); router.push('/'); }}
          >
            <Text style={styles.menuText}>HOME</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); router.push('/Headphones'); }}
          >
            <Text style={styles.menuText}>HEADPHONES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); router.push('/Speakers'); }}
          >
            <Text style={styles.menuText}>SPEAKERS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); router.push('/Earphones'); }}
          >
            <Text style={styles.menuText}>EARPHONES</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* Cart modal */}
      <Modal
        visible={cartOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setCartOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Your Cart</Text>
            <Text style={styles.modalText}>Your cart is empty.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setCartOpen(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60, // same width as left empty view
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 8,
    marginLeft: 12,
  },
  dropdown: {
    position: 'absolute',
    top: 64,
    left: 0,
    width: width,
    backgroundColor: '#fff',
    elevation: 5,
    zIndex: 999,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 1.5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
