import { View, Text, Switch } from "react-native"
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useContext } from "react";
import {Icon, Button, Chip } from "@rneui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import style from "../style/Style";
import themeContext from "../config/themeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const navigationToWarning = navigation =>{
    navigation.navigate("Warning");
}

const SpeedometerScreen = ({navigation}) => {
    const theme = useContext(themeContext);
    return(
        <View style={{ flex: 1, backgroundColor: theme.backgroundTitleColor}}> 
            <View style={ {flex: 2, flexDirection: 'row', marginTop: 20}}>
                <View style={{flex: 2, alignItems: 'stretch', padding: 10}}>
                    <Button color={theme.backgroundButtonColor}
                        buttonStyle={{borderRadius: 5}} 
                        onPress={()=>navigation.navigate('Nhật ký hành trình')}>
                        <View style={{flex: 1, height: 110}}>
                            <View style={{flex: 4, flexDirection: 'row', borderBottomWidth: 1, borderColor: 'white', paddingBottom: 5}}>
                                <View style={[style.container, {flex:1, borderRightWidth: 1, borderColor: 'white'}]}>
                                    <MaterialCommunityIcons name="map-marker-distance" type="MaterialCommunityIcons" color='white' size={35}></MaterialCommunityIcons>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text style={{color: 'white', fontWeight:'bold'}}>0,00</Text>
                                        <Text style={{color: 'white'}}> km</Text>
                                    </View>
                                </View>
                                <View style={[style.container,{flex:1}]}>
                                    <MaterialCommunityIcons name="speedometer-slow" color='white' size={35}></MaterialCommunityIcons>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text style={{color: 'white', fontWeight:'bold'}}>0</Text>
                                        <Text style={{color: 'white'}}> km/h</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[style.container,{flex: 3, flexDirection: 'row'}]}>
                                <MaterialCommunityIcons name="clock-time-eight-outline" color='white' size={35}></MaterialCommunityIcons>
                                <Text style={{color: 'white', fontWeight:'bold'}}>00:00</Text>
                            </View>
                        </View>
                    </Button>
                </View>
                <View style={{flex: 1, padding: 10}}>
                    <View style={[style.container,{flex: 1,  backgroundColor: theme.backgroundButtonColor, borderRadius: 5}]}>
                        <Text style={{color:'white',fontSize:20}}>20:00</Text>
                    </View>
                    <View style={[style.container,{flex: 1, flexDirection: 'row', justifyContent:'space-between', marginTop: 10}]}>
                        <Button
                            title='STOP'
                            titleStyle={{
                                color:'white', fontSize: 10, width:26, height: 30,textAlign: 'center', textAlignVertical:'center'
                            }}
                            buttonStyle={{
                                backgroundColor: theme.backgroundButtonColor,
                                borderRadius: 30
                                }} >
                        </Button>
                        <Button 
                            color={theme.backgroundButtonColor}
                            buttonStyle={{borderRadius: 40}} 
                            onPress={()=>navigation.navigate('Cài đặt')}>
                            <IoniconsIcons name="ios-settings" size={25} style={{color:'white', width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></IoniconsIcons>
                        </Button>
                    </View>
                </View>
                
            </View>
            <View style={{flex: 8,}}>
                <View style={[style.container,{flex: 1, flexDirection:'row'}]}>
                    <View style={{zIndex: 999, marginLeft: 95}}>
                        <Button color={'transparent'} buttonStyle={{height: 200, width: 100}}></Button>
                    </View>
                    <View style={[style.container,
                        { 
                            borderColor: 'red', borderRadius: 100, borderWidth: 15, 
                            height: 200, width: 200, 
                            marginLeft:-100, marginRight:-100,
                            backgroundColor:'white',
                            justifyContent:'flex-start',
                            padding: 10
                        }]}>
                            <Chip title="auto" style={{marginTop: 30}}></Chip>
                            <Text style={{fontSize: 90, fontWeight: 'bold', marginTop: -20}}>50</Text>
                        </View>
                    <View style={{marginRight: 95}}>
                        <Button color={'transparent'} buttonStyle={{height: 200, width: 100}}></Button>
                    </View>
                </View>
                <View style={[style.container,{flex: 1}]}>
                    <View style={[style.container,
                    { 
                        borderColor: 'green', borderRadius: 100, borderWidth: 15, 
                        height: 200, width: 200, 
                        marginTop:30,
                        marginBottom:50,
                        justifyContent:'flex-start',
                        padding: 10
                    }]}>
                        <Text style={{fontSize: 90, fontWeight: 'bold', marginTop:15, color:'white'}}>0</Text>
                        <Text style={{fontSize:17, marginTop:-10, color:'white'}}>KM/H</Text>
                    </View>
                </View>
            </View>
            <View style={[style.container, {flex: 1, flexDirection:'row', justifyContent:'space-around', paddingLeft: 30, paddingRight: 30}]}>
                <Button 
                    color={theme.backgroundButtonColor}
                    buttonStyle={{borderRadius: 40}} >
                    <IoniconsIcons name="warning" size={25} style={{color:'white', width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></IoniconsIcons>
                </Button>
                <Button 
                    color={theme.backgroundButtonColor}
                    buttonStyle={{borderRadius: 40}} >
                    <MaterialCommunityIcons name="directions" size={25} style={{color:'white', width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                </Button>
                <Button 
                    color={theme.backgroundButtonColor}
                    buttonStyle={{borderRadius: 40}} >
                    <MaterialCommunityIcons name="laptop" size={25} style={{color:'white', width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                </Button>
                <Button 
                    color={theme.backgroundButtonColor}
                    buttonStyle={{borderRadius: 40}} >
                    <MaterialCommunityIcons name="exit-to-app" size={25} style={{color:'white', width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                </Button>
            </View>
        </View>
    )
}

export default SpeedometerScreen;