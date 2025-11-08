import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Categories() {
  const router = useRouter();

  const categories = [
    { title: 'HEADPHONES',
      //  image: require('../assets/shared/headphones.png'),
        path: '/headphones'
       },
    { title: 'SPEAKERS', 
      // image: require('../assets/shared/speakers.png'),
       path: '/speakers' },
    { title: 'EARPHONES',
      //  image: require('../assets/shared/earphones.png'),
        path: '/earphones' },
  ];

  return (
    <View style={styles.categories}>
      {categories.map((cat, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryCard}
          onPress={() => router.push(cat.path)}
        >
          {/* <Image source={cat.image} style={styles.categoryImage} resizeMode="contain" /> */}
          <Text style={styles.categoryTitle}>{cat.title}</Text>
          <Text style={styles.shopLink}>SHOP {'>'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
