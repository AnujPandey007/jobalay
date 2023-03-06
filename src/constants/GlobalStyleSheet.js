import { StyleSheet } from "react-native";

export default globalStyle = StyleSheet.create({
    customContainer: {
        // backgroundColor: "skyblue",
        margin: 15
    },
    customButtonStyle:{
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },
    customTextLight:{
        fontFamily: "Quicksand-Light",
        color: "black",
        fontSize: 18,
    },
    customTextMedium:{
        fontFamily: "Quicksand-Medium",
        color: "black",
        fontSize: 18,
    },
    customTextBold:{
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: 18,
    },
    customInputStyle: {
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        paddingLeft: 15,
    },
    customAppBarStyle: {
        title: 'My home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: "Quicksand-Bold",
        },
    }
})