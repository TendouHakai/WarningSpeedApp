import { CurrentRenderContext } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import { useState, useContext } from "react";
import themeContext from "../config/themeContext";




const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    overlay:{
        margin: -10,
        padding: 15,
    },
    titleOverLay:{
        fontWeight:'bold',
        fontSize: 18,
    },
    textOverlay:{
        marginTop: 10,
    },
    buttonOverlay:{
        backgroundColor:'transparent',
        marginRight: 20,
    }
});

export default style;