import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

export const Logo = () => {
  return (
    <View style={styles.logos}>
      <View style={[styles.oval, styles.oval1]}></View>
      <View style={[styles.oval, styles.oval2]}></View>
      <View style={[styles.oval, styles.oval3]}></View>
      <Text style={styles.logoText}>Calm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? 10 : 55,
    marginBottom: Platform.OS === 'android' ? 30 : 70,
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    marginLeft: -20,
    fontWeight: 'bold'

  },
  oval: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  oval1: {
    transform: [{rotate: '-5deg'}, {scaleY: 0.5}] ,
  },
  oval2: {
    transform: [
      {rotate: '5deg'},
      {scaleY: 0.6},
      {scaleX: 1.3},
      {translateX: -14},
      {translateY: 20},
      
    ],
  },
  oval3: {
    transform: [
      {rotate: '-5deg'},
      {scaleY: 0.7},
      {scaleX: 1.6},
      {translateX: -25},
      {translateY: 28},
    ],
  },
});