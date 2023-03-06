import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import GlobalStyleSheet from '../constants/GlobalStyleSheet';

export default function JobItem({item}) {
  return (
    <View style={{...styles.itemContainer, backgroundColor: item.color}}>
        <Text style={{...GlobalStyleSheet.customTextBold, paddingHorizontal:10, paddingVertical:5, backgroundColor:"white", borderRadius:5, fontSize: 14, alignSelf: "flex-start"}}>{item.jobName.substring(0,1)}</Text>
        <Text style={{...GlobalStyleSheet.customTextBold, fontSize: 14, alignSelf: "flex-start"}}>{item.jobName}</Text>
        <View>
            <Text style={{...GlobalStyleSheet.customTextBold, alignSelf: "center", fontSize: 18, marginBottom: 7}}>{item.jobNumbers}</Text>
            <Pressable style={({pressed})=>({padding: 10, borderRadius: 10,  backgroundColor: pressed ? "#F0F0F0" : "white"})}>
                <Text style={{...GlobalStyleSheet.customTextBold, fontSize: 13}}>View More</Text>
            </Pressable>
        </View>
        
    </View>
  );
}


const styles = StyleSheet.create({
    itemContainer: {
        // height: 60,
        width: 110,
        margin: 10,
        padding: 10,
        backgroundColor: "skyblue",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
    }
})