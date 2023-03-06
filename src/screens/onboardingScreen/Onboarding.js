import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, ScrollView, View, FlatList, Text, StatusBar, Image } from 'react-native';
import Metrics from '../../constants/Metrics';
import Slide, { SLIDE_HEIGHT } from './Slide';
import SlideData from "../../data/OnboardingData";
import GlobalStyleSheet from '../../constants/GlobalStyleSheet';
import Paginator from './Paginator';
import NextButton from './NextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { interpolate } from 'react-native-reanimated';

export default function OnBoarding({navigation}) {

  const [backgroundColor, setBackgroundColor] = useState("#cde6e2");

  const slidesRef = useRef(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;

  useEffect(() => {
    console.log(currentIndex);
    if(currentIndex==0){
        setBackgroundColor("#cde6e2");
    }else if(currentIndex==1){
        setBackgroundColor("#dcd8fc");
    }else if(currentIndex==2){
        setBackgroundColor("pink");
    }else if(currentIndex==3){
        setBackgroundColor("skyblue");
    }else{
        setBackgroundColor("pink");
    }
  }, [currentIndex])
  

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = async() => {
    if(currentIndex<SlideData.length-1){
        slidesRef.current.scrollToIndex({index: currentIndex+1});
    }else{
        try{
            await AsyncStorage.setItem('isViewed', "true");
            navigation.replace("Home");
        }catch(e){
            console.log(e);
        }
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
        <View style={[styles.slider, {backgroundColor: backgroundColor}]}>

            {SlideData.map(({image, imageUrl}, index)=> {

                const inputRange =  [(index-0.5)*Metrics.screenWidth, index*Metrics.screenWidth, (index+0.5)*Metrics.screenWidth];

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                    extrapolate: "clamp"
                });
                
                return (
                    <Animated.View style={[styles.underlayer, {opacity: opacity}]} key={index}>
                        <Image source={image} style={{...styles.pic}}/>
                    </Animated.View>
                );
            })}

            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={SlideData}
                horizontal 
                pagingEnabled
                snapToInterval={Metrics.screenWidth} 
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                    useNativeDriver: false
                })}
                onViewableItemsChanged={viewableItemsChanged}
                renderItem = { ({item})=> {
                    return (<Slide label={item.imageTitle} isRight={item.isRight}/>);
                }}
                scrollEventThrottle={32}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
        </View>
        <View style={styles.footer}>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: backgroundColor}}/>
            <View style={{...styles.footerData}}>
                <Paginator SlideData={SlideData} scrollX={scrollX}/>
                <Text style={{...GlobalStyleSheet.customTextBold, fontSize:24, textAlign:"center", marginVertical:20, color: backgroundColor}}>{SlideData[currentIndex].title}</Text>
                <Text style={{...GlobalStyleSheet.customTextMedium, fontSize:14, textAlign:"center" }}>{SlideData[currentIndex].description}</Text>
                <NextButton currentIndex={currentIndex} scrollTo={scrollTo} backgroundColor={backgroundColor}/>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75
    },
    footer:{
        flex: 1,
        backgroundColor:"red"
    },
    footerData: {
        flex: 1,
        backgroundColor:"white", 
        borderTopLeftRadius: 75,
        alignItems:"center",
        justifyContent: "space-around",
        padding: 15,
    },
    underlayer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomRightRadius: 75,
        // overflow: "hidden"
    },
    pic:{
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    }
});
