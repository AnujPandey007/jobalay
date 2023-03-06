import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Metrics from '../../constants/Metrics';

export const SLIDE_HEIGHT = 0.61*Metrics.screenHeight;

export default function Slide(props) {

    const transform = [
        {translateY: (SLIDE_HEIGHT-100)/2},
        {translateX: props.isRight ? Metrics.screenWidth/2 - 50 : -Metrics.screenWidth/2 + 50},
        {rotate: props.isRight ? "-90deg" : "90deg"}
    ]

  return (
    <View style={{...styles.container}}>
        <View style={{...styles.titleContainer, transform: transform}}>
            <Text style={styles.title}>{props.label}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Metrics.screenWidth,
    },
    title:{
        fontSize:80,
        color:"white",
        fontWeight:"500",
        textAlign:"center",
        lineHeight:80
    },
    titleContainer:{
        // backgroundColor:"red",
        height:100,
        justifyContent:"center"
    }
});