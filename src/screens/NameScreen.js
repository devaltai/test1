
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Head} from '../components/Head'




export const NameScreen = ({navigation}) => {
  
  return (
    <View >
      <Text>What's your name?</Text>
      <View>
        <Text>Tim</Text>
        <Button title='Continue' onPress={() => navigation.navigate("Date")} />
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
  button: {
    marginTop: 430,
    paddingTop: 160,
  }
});

 