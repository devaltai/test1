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




export const GenderScreen = ({navigation}) => {
  
  return (
    <View >
      <Text>What’s your gender?</Text>
      <Text>This highlights the duality of your masculine and femine energies.</Text>
      <View>
        <Text>Tim</Text>
        <Button title='Continue' onPress={() => navigation.navigate("Date")} />
      </View>
    </View>
    
  )
}

GenderScreen.options = () => {
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