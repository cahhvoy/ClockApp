import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Alarm from "../ClockFaces/Alarms.js";
import Clock from "../ClockFaces/Clock.js";
import StopWatch from "../ClockFaces/StopWatch.js";


const BotTabNav = createBottomTabNavigator(
    {      
        Alarm: {
            screen: Alarm,
            navigationOptions: {
            title: "Alarm(s)",
            tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-alarm" color={tintColor} size={35} />
             )
            },
        },
        Clock: {
            screen: Clock,
            navigationOptions: {
            title: "Clock",
            tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-time" color={tintColor} size={35} />
             )
            },
        },
        StopWatch: {
            screen: StopWatch,
            navigationOptions: {
            title: "StopWatch",
            tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-stopwatch" color={tintColor} size={35} />
             )
            },
        }
    },     
    {
        initialRouteName: 'Clock',
        swipeEnabled: true,
        animationEnabled: true,
        bottomTabNavOptions:{
           
        },
        tabBarOptions: {
            activeTintColor: '#c642fe',
            //inactiveTintColor:'#0b2400',            
            inactiveTintColor:'#afafaf',
            activeBackgroundColor:'#fffff',
            inactiveBackgroundColor:'#f9f8f5',
            showIcon: true,
            showLabel:true,
            
            labelStyle: {
                fontSize: 14,
                paddingTop:1.5,
                letterSpacing:1.78,
                paddingBottom:1
            },
            IconStyle:{
             
            },
            style: {
                borderTopWidth:0,
                marginBottom:1,
                height:60,
                marginVertical:1.4
            },
        }
    },
   
);

export default createAppContainer(BotTabNav)