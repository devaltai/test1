import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

//Componets
import {Head} from '../components/Head'

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width


export const GenderScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your gender?</Text>
      <Text>This highlights the duality of your masculine and femine energies.</Text>
      <View style={styles.boxs}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Relation')}>
          <Image source={require('../img/male.png')} style={styles.img}/>
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Relation')}>
          <Image source={require('../img/female.png')} style={styles.img}/>
          <Text >Female</Text>
        </TouchableOpacity>
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
  container: {
    padding: 20,
    height: height - 100,
    backgroundColor: '#fff'
  },
  boxs: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box: {
    width: width/2 - 30,
    height: (width/2 - 30) *1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#EFF1FD',
    borderRadius: 16
  },
  img: {
    marginBottom: 33
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 20,
  },
});