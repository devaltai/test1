import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Head = ({navigation}) => {
  
  return (
    <LinearGradient
    colors={['#6B73FF', '#000DFF']}
    start={{x: 0, y: 0}} end={{x: 1, y: 1}}
    style={styles.head}>
      <SafeAreaView style={styles.head}>
        <Image source={require('../img/logo.png')} style={styles.tinyLogo} /> 
        <Text style={styles.text}>Routine</Text>
      </SafeAreaView>
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
    head: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    tinyLogo: {
        width: 40,
        height: 40,
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 30
    },
});