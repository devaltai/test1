
//Core
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

//Componets
import {Format } from '../components/Format';
import {Continue} from '../components/Continue'
import {Head} from '../components/Head'

const height = Dimensions.get("window").height

export const NameScreen = ({navigation}) => {
  const Handler = () => {
    navigation.navigate('Date')
  }
  
  return (
    <View style={styles.container}>
      <Text>What's your name?</Text>
      <View style={styles.container1}>
        <Format title="Tim"/>
        <Continue Handler={Handler} label='Countinue'/>
      </View>
    </View>
    
  )
}

NameScreen.options = () => {
    return {
      header: () => <Head/>,
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: height - 100,
  },
  container1: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
