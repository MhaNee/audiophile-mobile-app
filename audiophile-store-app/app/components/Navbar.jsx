import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function Navbar() {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnim] = useState(new Animated.Value(0));

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
        <TouchableOpacity onPress={() => { navigation.navigate('Home'); setMenuOpen(false); }}>
          <Text style={styles.logo}>audiophile</Text>
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton} onPress={() => { /* TODO: open cart */ }}>
            <Icon name="cart-outline" size={22} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={toggleMenu}>
            <Icon name={menuOpen ? 'close-outline' : 'menu-outline'} size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown menu */}
      {menuOpen && (
        <Animated.View
          style={[
            styles.dropdown,
            { transform: [{ translateY: dropdownTranslate }] },
          ]}
        >
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); navigation.navigate('Headphones'); }}
          >
            <Text style={styles.menuText}>HEADPHONES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); navigation.navigate('Speakers'); }}
          >
            <Text style={styles.menuText}>SPEAKERS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => { toggleMenu(); navigation.navigate('Earphones'); }}
          >
            <Text style={styles.menuText}>EARPHONES</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
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
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 12,
  },
  dropdown: {
    position: 'absolute',
    top: 64, // below navbar
    left: 0,
    width: width, // full screen width
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
});
