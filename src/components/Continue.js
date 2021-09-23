import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';

const width = Dimensions.get("window").width


export const Continue = ({Handler, label}) => {
    const route = useRoute();

    return (
        <TouchableOpacity onPress={() => Handler()} >
            <LinearGradient
            colors={['#6B73FF', '#000DFF']}
            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
            style={styles.head}>
                <Text style={styles.text}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    head: {
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width-40,
        flexDirection: 'row',
        borderRadius: 22
    },
    text: {
        color: '#fff',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 22,
    },
});