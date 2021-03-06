import React, { Component } from 'react'
import { Text, StyleSheet, View,StatusBar,SafeAreaView } from 'react-native'
import Header from '../components/Header.js';
    
export default class alarm extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor="#fe42d9"  barStyle="light-content" />
            <Header title="Alarm"/> 
            <SafeAreaView style={Styles.container}>
            <View contentInsetAdjustmentBehavior="automatic" >
                <Text>Alarms</Text>
            </View>
            </SafeAreaView>
        </>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
          backgroundColor: '#fff',         
          alignSelf :"stretch",   
          paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          justifyContent: 'center',
          alignItems: 'center',      
           },
})
