
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




export const DateScreen = ({navigation}) => {
  
  return (
    <View >
      <Text>What’s your date of birth?</Text>
      <View>
        <Text>1 January 1992</Text>
        <Button title='Continue' onPress={() => navigation.navigate("Gender")} />
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
  button: {
    marginTop: 430,
    paddingTop: 160,
  }
});

 