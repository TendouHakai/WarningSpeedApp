import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNavigationContainerRef, NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import themeContext from './config/themeContext';
import theme from './config/theme';

import WarningScreen from './screen/WarningScreen';
import SpeedometerScreen from './screen/SpeedometerScreen';
import JouneyDiaryScreen from './screen/JourneyDiaryScreen';
import SettingScreen from './screen/settingsScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Button } from '@rneui/themed';


const rootStackNavigator = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'white',
    card: '#142c48',
  },
};

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(()=>{
    let eventListener = EventRegister.addEventListener(
      'ChangeTheme',
      (data)=>{setMode(data);}
    );
    return ()=>{
      EventRegister.removeAllListeners(eventListener);
    }
});
  


  return (
    <themeContext.Provider value={mode === true? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true? DarkTheme: MyTheme}>
        <rootStackNavigator.Navigator initialRouteName='Warning'>
          <rootStackNavigator.Screen name='Warning' component={WarningScreen} 
                                      options={{
                                        headerShown: false
                                        }}></rootStackNavigator.Screen>
          <rootStackNavigator.Screen name='Speedometer' component={SpeedometerScreen} options={{headerShown: false}}></rootStackNavigator.Screen>
          <rootStackNavigator.Screen name='Nhật ký hành trình' component={JouneyDiaryScreen}
                                      // options={{
                                      //   headerRight: () => (
                                      //     <View style={{flexDirection:'row'}}>
                                      //     <Button 
                                      //         onPress={() => showMode('date')}
                                      //         buttonStyle={{borderRadius: 40, backgroundColor:'transparent'}}>
                                      //         <MaterialCommunityIcons name="calendar-month" color={'white'} size={25} style={{ width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                                      //     </Button>
                                      //     <Button 
                                      //         buttonStyle={{borderRadius: 40, backgroundColor:'transparent'}}>
                                      //         <MaterialCommunityIcons name="delete-sweep" color={'white'} size={28}  style={{ width:26, height: 30,textAlign: 'center', textAlignVertical:'center'}} ></MaterialCommunityIcons>
                                      //     </Button>
                                      //     </View>
                                      //   ),
                                      // }}
                                      >
                                        
           </rootStackNavigator.Screen>
          <rootStackNavigator.Screen name='Cài đặt' component={SettingScreen}></rootStackNavigator.Screen>
        </rootStackNavigator.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

