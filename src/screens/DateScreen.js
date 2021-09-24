//Core
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

//Componets
import {Format } from '../components/Format';
import {Continue} from '../components/Continue'
import {Head} from '../components/Head'

const height = Dimensions.get("window").height

export const DateScreen = ({navigation}) => {
  const Handler = () => {
    navigation.navigate('Gender')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your date of birth?</Text>
      <View style={styles.container1}>
        <Format title="1 January 1992"/>
        <Continue Handler={Handler} label='Countinue'/>
      </View>
    </View>
  )
}

DateScreen.options = () => {
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
  title: {
    color: '#000',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 20,
  }
});

 