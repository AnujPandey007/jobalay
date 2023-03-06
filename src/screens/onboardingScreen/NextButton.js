import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import GlobalStyleSheet from '../../constants/GlobalStyleSheet';
import Metrics from '../../constants/Metrics';

export default function NextButton({backgroundColor, scrollTo, currentIndex}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={scrollTo}>
            <Text style={{...GlobalStyleSheet.customTextBold, ...styles.buttonText, backgroundColor: backgroundColor}}>{currentIndex==3 ? "Done": "Next"}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    buttonText:{
        padding:9,
        height: Metrics.screenHeight*0.05,
        width: Metrics.screenWidth*0.2,
        textAlign:"center",
        justifyContent: "center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
        color:"white",
        fontSize: 14
    }
});