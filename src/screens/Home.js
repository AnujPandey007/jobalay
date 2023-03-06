import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, ScrollView, Image, StatusBar } from 'react-native';
import GlobalStyleSheet from '../constants/GlobalStyleSheet';
import JobItem from './JobItem';
import Metrics from '../constants/Metrics';

export default function Home() {

    const jobsList = [
        {jobName: "Engineering", jobNumbers: "3.2K Jobs", color: "pink"},
        {jobName: "Medical", jobNumbers: "1.9K Jobs", color: "#cde6e2"},
        {jobName: "Software", jobNumbers: "0.6K Jobs", color: "#dcd8fc"},
        {jobName: "Network", jobNumbers: "7.2K Jobs", color: "#e5ebf5"},
        {jobName: "Operation", jobNumbers: "4.2K Jobs", color: "skyblue"},
        {jobName: "Web", jobNumbers: "3.7K Jobs", color: "#e5ebf5"},
        {jobName: "System", jobNumbers: "2.9K Jobs", color: "#dcd8fc"},
        {jobName: "Mobile", jobNumbers: "5.1K Jobs", color: "#cde6e2"},
    ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"white"}} >
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={GlobalStyleSheet.customContainer}>
            <Text style={{...GlobalStyleSheet.customTextMedium, fontSize: 25}}>Find the world's most</Text>
            <Text style={{...GlobalStyleSheet.customTextBold, fontSize: 25}}>Amazing Jobs</Text>    
        </View>

        <View style={GlobalStyleSheet.customContainer}>
            <TextInput style={GlobalStyleSheet.customInputStyle} selectionColor={'#C0C0C0'} placeholder="Search For Jobs..."/>
        </View>

        <View style={GlobalStyleSheet.customContainer}>
            <Text style={GlobalStyleSheet.customTextBold}>Latest</Text>
        </View>

        <View style={{...styles.latestCard}}>
            <View style={{...GlobalStyleSheet.customContainer, ...styles.latestCard1}}/>
            <View style={{...GlobalStyleSheet.customContainer, ...styles.latestCard2}}/>
            <View style={{...GlobalStyleSheet.customContainer, ...styles.latestCard3}}> 
                <View style={{marginHorizontal:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{...GlobalStyleSheet.customTextMedium, fontSize: 14}}>Uber Technologies Inc</Text>
                    <Image source={{uri: "https://play-lh.googleusercontent.com/AQtSF5Sl18yp3mQ2tcbOrBLekb7cyP3kyg5BB1uUuc55zfcnbkCDLHFTBwZfYiu1aDI"}} style={styles.imageStyle}/>
                </View>
                <Text style={{marginHorizontal:10, ...GlobalStyleSheet.customTextBold, fontSize: 20,}}>Sr. Product Designer</Text>
                <View style={{marginHorizontal:10, marginTop:20,marginBottom:10,  flexDirection:"row", alignItems:"flex-start", justifyContent: "flex-start"}}>
                    <Text style={{...GlobalStyleSheet.customTextBold, marginRight:10, fontSize: 12, padding: 10, borderRadius: 10, backgroundColor: "white"}}>User interfoce</Text>
                    <Text style={{...GlobalStyleSheet.customTextBold, fontSize: 12, padding: 10, borderRadius: 10, backgroundColor: "white"}}>User Resecich / Flow</Text>
                </View>
                <View style={{marginHorizontal:10, marginTop:5, flexDirection: "row", alignSelf:"flex-start"}}>
                    <Text style={{ ...GlobalStyleSheet.customTextMedium, fontSize: 13}}>Be in the first </Text>
                    <Text style={{...GlobalStyleSheet.customTextBold, fontSize: 13}}>10 applicants</Text>
                </View>
                
                <Text style={{...GlobalStyleSheet.customTextMedium, marginTop:5, marginRight:5, flexDirection: "row", alignSelf:"flex-end", fontSize: 12}}>50 min ago</Text>

            </View>
        </View>

        <View style={GlobalStyleSheet.customContainer}>
            <Text style={GlobalStyleSheet.customTextBold}>Categories</Text>
        </View>

        <View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.jobsListStyle}
                keyExtractor={(item, index)=> index.toString()}
                data={jobsList}
                renderItem={({item})=> {
                    return (<JobItem item={item}/>)
                }}
            />
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    jobsListStyle: {
        // backgroundColor:"pink",
        height: Metrics.screenHeight*0.2
    },
    imageStyle: {
        height: 30, 
        width: 30,
        borderRadius: 10,
        margin:10
    },
    latestCard:{
        // backgroundColor: "red", 
        height: Metrics.screenHeight*0.3,
        justifyContent: "center"
    },
    latestCard1:{
        backgroundColor: "pink", 
        height: Metrics.screenHeight*0.23,
        width: Metrics.screenWidth*0.93,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
    },
    latestCard2:{
        backgroundColor: "skyblue", 
        height: Metrics.screenHeight*0.25,
        width: Metrics.screenWidth*0.9,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 2,
        elevation:2,
    },
    latestCard3:{
        backgroundColor: "#fee8ce", 
        height: Metrics.screenHeight*0.26,
        width: Metrics.screenWidth*0.87,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 3,
        elevation:3,
    },
});
