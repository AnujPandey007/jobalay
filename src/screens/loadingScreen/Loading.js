import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GlobalStyleSheet from '../../constants/GlobalStyleSheet';
import Metrics from '../../constants/Metrics';

export default function Loading() {
  return (
    <View style={styles.container}>
        <Text style={{...GlobalStyleSheet.customTextBold, color: "black", fontSize: 50}}>
          Loading
        </Text>
        {/* <Image source={require("../../assets/images/1.jpg")} style={{}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
})
