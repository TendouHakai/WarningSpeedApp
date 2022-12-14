import { View, Text, Switch, ScrollView } from "react-native"
import * as React from 'react';
import { useState, useContext } from "react";
import {EventRegister} from 'react-native-event-listeners';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import RadioButtonRN from 'radio-buttons-react-native';

import style from "../style/Style";
import themeContext from "../config/themeContext";
import { Button, Overlay, Slider } from "@rneui/themed";
import dataVehicle from "../data/datasettings/dataVehicle";
import dataWarningVoice from "../data/datasettings/dataWarningVoice";
import dataShortCuts from "../data/datasettings/datashortcuts";
import dataSizeShortCut from "../data/datasettings/dataSizeShortCut";

export default function SettingScreen(){
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);
    const [visibleVehicle, setVisibleVehicle] = useState(false);
    const [visibleWarningVoice, setVisibleWarningVoice] = useState(false);
    const [visibleWarningLevel, setVisibleWarningLevel] = useState(false);
    const [WarningLevelValue, setWarningLevelValue] = useState(1);
    const [visibleShortCuts, setVisibleShortCuts] = useState(false);
    const [visibleSizeShortCuts, setVisibleSizeShortCuts] = useState(false);

    const toggleOverlayVehicle = () => {
        setVisibleVehicle(!visibleVehicle);
    };
    const toggleOverlayWarningVoice = () => {
        setVisibleWarningVoice(!visibleWarningVoice);
    };
    const toggleOverlayWarningLevel = () => {
        setVisibleWarningLevel(!visibleWarningLevel);
    };
    const toggleOverlayShortCuts = () => {
        setVisibleShortCuts(!visibleShortCuts);
    };
    const toggleOverlaySizeShortCuts = () => {
        setVisibleSizeShortCuts(!visibleSizeShortCuts);
    };
    return(
        <View style={{backgroundColor: theme.backgroundTitleColor}}>
            <ScrollView>
            <View style={{padding: 10, backgroundColor: theme.backgroundFlatlist}}>
                <Text style={{color:theme.titleColor, fontWeight:'bold'}}>Chung</Text>
                <Button onPress={toggleOverlayVehicle}
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <IoniconsIcons name="car-sharp" type="MaterialCommunityIcons" color={theme.textColor} size={25}></IoniconsIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Ch???n ph????ng ti???n</Text>
                        <Text style={{color:theme.textColor}}>?? t?? bu??t; ?? t?? ?????u k??o k??o s?? mi r?? mo??c; m?? t??; ?? t?? chuy??n d??ng; </Text>
                    </View>
                </Button>

                <Button 
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <IoniconsIcons name="warning" color={theme.textColor} size={25}></IoniconsIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>C???nh b??o t???c ?????</Text>
                        <Text style={{color:theme.textColor}}>Ph??t ??m thanh v?? nh???p nh??y khi v?????t qu?? t???c ????? cho ph??p</Text>
                    </View>
                    <Switch
                    thumbColor={theme.titleColor}
                    trackColor={{true: theme.titleColor, false: 'grey'}}></Switch> 
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <FontistoIcons name="bell-alt" color={theme.textColor} size={25}></FontistoIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Ph??t ??m thanh</Text>
                    </View>
                    <Switch
                    thumbColor={theme.titleColor}
                    trackColor={{true: theme.titleColor, false: 'grey'}}></Switch> 
                </Button>

                <Button onPress={toggleOverlayWarningVoice}
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="account-voice" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>C???nh b??o b???ng gi???ng n??i</Text>
                        <Text style={{color:theme.textColor}}>Lu??n b???t</Text>
                    </View>
                </Button>

                <Button onPress={toggleOverlayWarningLevel}
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="reload-alert" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>M???c c???nh b??o khi v?????t qu?? t???c ????? gi???i h???n</Text>
                        <Text style={{color:theme.textColor}}>5 km/h</Text>
                    </View>
                </Button>

                <Button onPress={toggleOverlayShortCuts}
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="directions" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Ph??m t???t</Text>
                        <Text style={{color:theme.textColor}}>Google maps</Text>
                    </View>
                </Button>

                <Button onPress={toggleOverlaySizeShortCuts}
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="format-size" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>K??ch th?????c khi hi???n th??? tr??n ???ng d???ng kh??c</Text>
                        <Text style={{color:theme.textColor}}>Nh???</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="speedometer-slow" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>?????ng h??? t???c ????? c???a ph????ng ti???n</Text>
                    </View>
                    <Switch
                    thumbColor={theme.titleColor}
                    trackColor={{true: theme.titleColor, false: 'grey'}}></Switch> 
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="calculator-variant-outline" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>????? l???ch so v???i t???c ????? c???a ph????ng ti???n</Text>
                        <Text style={{color:theme.textColor}}>??i???u ch???nh ????? l???ch gi???a t???c ????? hi???n th??? so v???i t???c ????? th???c t???</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="theme-light-dark" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Ch??? ????? ban ????m</Text>
                    </View>
                    <Switch value={mode} 
                    thumbColor={theme.titleColor}
                    trackColor={{true: theme.titleColor, false: 'grey'}}
                    onValueChange={(value)=>{
                        setMode(value)
                        EventRegister.emit('ChangeTheme', value);
                    }}></Switch>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="exit-to-app" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Hi???n th??? ph??m tho??t ???ng d???ng ??? m??n h??nh ch??nh</Text>
                    </View>
                    <Switch
                    thumbColor={theme.titleColor}
                    trackColor={{true: theme.titleColor, false: 'grey'}}></Switch> 
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="human-greeting" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 250}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Hi???n th??? ph??m tho??t ???ng d???ng ??? m??n h??nh ch??nh</Text>
                    </View>
                    <Switch
                    thumbColor={theme.titleColor}
                    trackColor={{true: theme.titleColor, false: 'grey'}}></Switch> 
                </Button>
            </View>

            <View style={{padding:10, backgroundColor: theme.backgroundFlatlist}}>
                <Text style={{color:theme.titleColor, fontWeight:'bold'}}>V??? ???ng d???ng n??y</Text>
                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <AntDesignIcons name="exclamationcircleo" color={theme.textColor} size={25}></AntDesignIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Phi??n b???n</Text>
                        <Text style={{color:theme.textColor}}>3.3</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="share-variant" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Chia s??? ???ng d???ng</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <AntDesignIcons name="like1" color={theme.textColor} size={25}></AntDesignIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>????nh gi?? ???ng d???ng</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="cloud-download" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>C???p nh???t d??? li???u</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <IoniconsIcons name="location" color={theme.textColor} size={25}></IoniconsIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>????ng g??p d??? li???u</Text>
                        <Text style={{color:theme.textColor}}>G???i ?? th??m m???i/ ch???nh s???a t???c ????? gi???i h???n cho m???t tuy???n ???????ng</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="traffic-light" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Lu???t giao th??ng ???????ng b???</Text>
                        <Text style={{color:theme.textColor}}>T??m hi???u v??? lu???t giao th??ng ???????ng b??? v??? t???c ????? gi???i h???n</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="alert-circle-check-outline" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Ki???m tra vi ph???m</Text>
                    </View>
                </Button>

                <Button
                    titleStyle={{color: 'black'}}
                    buttonStyle={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="advertisements-off" color={theme.textColor} size={25}></MaterialCommunityIcons>
                    <View style={{ marginLeft: 20, width: 280}}>
                        <Text style={{color:theme.textColor, fontWeight:'bold'}}>Xo?? qu???ng c??o</Text>
                        <Text style={{color:theme.textColor}}>Kh??ng hi???n th??? qu???ng c??o trong v??ng 1 n??m</Text>
                    </View>
                </Button>   
            </View>
            </ScrollView>
            <Overlay isVisible={visibleVehicle} onBackdropPress={toggleOverlayVehicle}>
                <View style={[style.overlay, {width: 340, backgroundColor:theme.backgroundTextColor}]}>
                    <Text style={[style.titleOverLay, {color: theme.textColor}]}>Ch???n ph????ng ti???n</Text>
                    <View>
                    <RadioButtonRN
                        box={false}
                        activeColor={theme.titleColor}
                        data={dataVehicle}
                        initial={1}
                        textColor={theme.textColor}
                        //selectedBtn={(e) => console.log(e)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Button buttonStyle={[style.buttonOverlay]} 
                                titleStyle={{color: theme.titleColor}}
                                onPress={toggleOverlayVehicle}>Hu???</Button>
                    </View>
                </View>
            </Overlay>
            <Overlay isVisible={visibleWarningVoice} onBackdropPress={toggleOverlayWarningVoice}>
                <View style={[style.overlay, {width: 340, backgroundColor:theme.backgroundTextColor}]}>
                    <Text style={[style.titleOverLay, {color: theme.textColor}]}>C???nh b??o b???ng gi???ng n??i</Text>
                    <View>
                    <RadioButtonRN
                        box={false}
                        activeColor={theme.titleColor}
                        data={dataWarningVoice}
                        initial={1}
                        textColor={theme.textColor}
                        //selectedBtn={(e) => console.log(e)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Button buttonStyle={[style.buttonOverlay]} 
                                titleStyle={{color: theme.titleColor}}
                                onPress={toggleOverlayWarningVoice}>Hu???</Button>
                    </View>
                </View>
            </Overlay>

            <Overlay isVisible={visibleWarningLevel} onBackdropPress={toggleOverlayWarningLevel}>
                <View style={[style.overlay, {width: 340, backgroundColor:theme.backgroundTextColor}]}>
                    <Text style={[style.titleOverLay, {color: theme.textColor}]}>M???c c???nh b??o khi v?????t qu?? t???c ????? t???i ??a</Text>
                    <Text style={[style.textOverlay,{alignSelf:'center'}]}>{WarningLevelValue} km/h</Text>
                    <View>
                        <Slider
                            value={WarningLevelValue}
                            onValueChange={setWarningLevelValue}
                            maximumValue={10}
                            minimumValue={1}
                            minimumTrackTintColor={theme.titleColor}
                            step={1}
                            thumbStyle={{ height: 18, width: 18, backgroundColor: 'transparent' }}
                            thumbProps={{
                            children: (
                                <MaterialCommunityIcons
                                name="checkbox-blank-circle"
                                color={theme.titleColor}
                                size={16}
                                />
                            ),
                            }}
                        />
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={[style.textOverlay]}>1</Text>
                        <Text style={[style.textOverlay]}>10</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Button buttonStyle={[style.buttonOverlay]} 
                                titleStyle={{color: theme.titleColor}}
                                onPress={toggleOverlayWarningLevel}>Hu???</Button>
                    </View>
                </View>
            </Overlay>
            
            <Overlay isVisible={visibleShortCuts} onBackdropPress={toggleOverlayShortCuts}>
                <View style={[style.overlay, {width: 340, backgroundColor:theme.backgroundTextColor}]}>
                    <Text style={[style.titleOverLay, {color: theme.textColor}]}>Ph??m t???t</Text>
                    <View>
                    <RadioButtonRN
                        box={false}
                        activeColor={theme.titleColor}
                        data={dataShortCuts}
                        initial={1}
                        textColor={theme.textColor}
                        //selectedBtn={(e) => console.log(e)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Button buttonStyle={[style.buttonOverlay]} 
                                titleStyle={{color: theme.titleColor}}
                                onPress={toggleOverlayShortCuts}>Hu???</Button>
                    </View>
                </View>
            </Overlay>

            <Overlay isVisible={visibleSizeShortCuts} onBackdropPress={toggleOverlaySizeShortCuts}>
                <View style={[style.overlay, {width: 340, backgroundColor:theme.backgroundTextColor}]}>
                    <Text style={[style.titleOverLay, {color: theme.textColor}]}>K??ch th?????c khi hi???n th??? tr??n ???ng d???ng kh??c</Text>
                    <View>
                    <RadioButtonRN
                        box={false}
                        activeColor={theme.titleColor}
                        data={dataSizeShortCut}
                        initial={1}
                        textColor={theme.textColor}
                        //selectedBtn={(e) => console.log(e)}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Button buttonStyle={[style.buttonOverlay]} 
                                titleStyle={{color: theme.titleColor}}
                                onPress={toggleOverlaySizeShortCuts}>Hu???</Button>
                    </View>
                </View>
            </Overlay>
            
            {/* <Switch value={mode} onValueChange={(value)=>{
                        setMode(value)
                        EventRegister.emit('ChangeTheme', value);
                    }}></Switch> */}
        </View>
    )
}