import { View, Text, FlatList } from "react-native"
import * as React from 'react';
import { useState, useContext } from "react";
import {Icon, Button,  Overlay } from "@rneui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import style from "../style/Style";
import themeContext from "../config/themeContext";
import Jouney from "../conponents/jouney";

import FlatListJouneyDiaryData from "../data/dataJouneyDiary";

const JouneyDiaryScreen = ({ navigation }) =>{
    const theme = useContext(themeContext);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [visibleDeleteJouney, setVisibleDeleteJouney] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
    };

    const toggleOverlayDeleteJouney = () => {
        setVisibleDeleteJouney(!visibleDeleteJouney);
      };

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection:'row'}}>
                <Button onPress={showDatePicker}
                    buttonStyle={{borderRadius: 40, backgroundColor:'transparent'}}>
                    <MaterialCommunityIcons name="calendar-month" color={'white'} size={25} style={{ width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                </Button>
                <Button onPress={toggleOverlayDeleteJouney}
                    buttonStyle={{borderRadius: 40, backgroundColor:'transparent'}}>
                    <MaterialCommunityIcons name="delete-sweep" color={'white'} size={28}  style={{ width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                </Button>
                </View>
            ),
        })
    }, [navigation])
    return(
        <View style={{flex: 1, backgroundColor: theme.backgroundTitleColor}}>
            <View style={[style.container,style.shadow,{flex:1, backgroundColor:theme.backgroundTextColor}]}>
                <Text style={{color: theme.titleColor, fontSize: 17, fontWeight: 'bold'}} >Tất cả hành trình</Text>
                <View style={{flexDirection: 'row', alignSelf:'stretch', justifyContent: 'space-around', marginLeft: 70, marginRight: 70}}>
                    <View>
                        <MaterialCommunityIcons name="map-marker-distance" type="MaterialCommunityIcons" color={theme.textColor} size={35}></MaterialCommunityIcons>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: theme.textColor, fontWeight:'bold'}}>0,00</Text>
                            <Text style={{color: theme.textColor}}> km</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="speedometer-slow" type="MaterialCommunityIcons" color={theme.textColor} size={35}></MaterialCommunityIcons>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: theme.textColor, fontWeight:'bold'}}>0</Text>
                            <Text style={{color: theme.textColor}}> km/h</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="clock-time-eight-outline" type="MaterialCommunityIcons" color={theme.textColor} size={35}></MaterialCommunityIcons>
                        <Text style={{color: theme.textColor, fontWeight:'bold'}}>00:00</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:7, backgroundColor: theme.backgroundFlatlist, marginTop: 1}}>
                <FlatList
                    data={FlatListJouneyDiaryData}
                    renderItem={({item, index})=>{
                        return(
                            <Jouney item={item} index={index}>
                            </Jouney>
                        );
                    }}>

                </FlatList>
                
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <Overlay isVisible={visibleDeleteJouney} onBackdropPress={toggleOverlayDeleteJouney}>
                <View style={[style.overlay, {backgroundColor: theme.backgroundTextColor}]}>
                    <Text style={[style.titleOverLay, {color: theme.textColor}]}>Xoá tất cả nhật ký</Text>
                    <Text style={[style.textOverlay, {color: theme.textColor}]}>
                        Bạn có muốn xoá tất cả nhật ký hành trình đã ghi?
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Button buttonStyle={[style.buttonOverlay]} titleStyle={{color: theme.titleColor}}>Không</Button>
                        <Button buttonStyle={[style.buttonOverlay]} titleStyle={{color: theme.titleColor}}>Có</Button>
                    </View>
                </View>
            </Overlay>
        </View>
    )
}

export default JouneyDiaryScreen;