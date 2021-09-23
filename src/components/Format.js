import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';

const width = Dimensions.get("window").width


export const Format = ({title}) => {

    return (
        <View style={styles.box}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width-60,
        flexDirection: 'row',
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginBottom: 100
        
        
    },
    text: {
        color: '#000',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 32,
    },
});