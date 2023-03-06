import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Metrics from '../../constants/Metrics';

export default function Paginator({SlideData, scrollX}) {
  return (
    <View style={styles.container}>
        {SlideData.map((_, index)=> {
            const inputRange = [(index-1)*Metrics.screenWidth, index*Metrics.screenWidth, (index+1)*Metrics.screenWidth];
            
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [7, 30, 7],
                extrapolate: "clamp"
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
            });

            return (<Animated.View key={index} style={{...styles.dot, width: dotWidth, opacity: opacity}}/>);
        })}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:"red",
        // height:65,
        flexDirection: "row",
        marginTop: 10
    },
    dot: {
        height: 7,
        backgroundColor: "#222222",
        borderRadius: 5,
        marginHorizontal: 7
    }
});
