import React, { Component } from 'react'
import {Platform,Text, StyleSheet, View,SafeAreaView,StatusBar } from 'react-native'
import Header from '../components/Header.js';

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state={
            nowTime:null, 
            nowDate:null             
        }
        this.DaysArray= ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
          
    }

    GetNowTime = () => {
        let Hour = new Date().getHours();
        let Mins = new Date().getMinutes();
        let Secs = new Date().getSeconds();
        let amPm = 'Pm';
        //let HourType =12;
    
        if (Mins < 10) { Mins = '0' + Mins;}
    
        if (Secs < 10) {Secs = '0' + Secs;}
       // if(HourType==24){
            if (Hour > 12) {Hour = Hour - 12;}    
            if (Hour == 0) {Hour = 12;}
        //}
        if (new Date().getHours() < 12) {amPm = 'Am';}
    
        this.setState({ nowTime: Hour + ':' + Mins + ':' + Secs + ' ' + amPm });
    
        this.DaysArray.map((item, key) => {
          if (key == new Date().getDay()) {
            this.setState({ nowDate: item.toUpperCase() });
          }
        })
      }
   
    componentDidMount(){
        this.timer = setInterval(() => {
           this.GetNowTime();
         }, 1000);
    }    
    componentWillUnmount(){        
        clearInterval(this.timer);
    }
    UNSAFE_componentWillMount(){
         this.GetNowTime();
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="#fe42d9"  barStyle="light-content" />
                <Header title="Clock"/>               
                <SafeAreaView style={Styles.container}>
                <View contentInsetAdjustmentBehavior="automatic" >
                    <View style={Styles.dayTextHld}>
                        <Text style={Styles.dayText}>{this.state.nowDate}</Text>
                    </View>
                    <View style={Styles.nowTxtHld}>
                        <Text style={Styles.nowTxt}>{this.state.nowTime}</Text>                        
                    </View>
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
         // alignSelf :"stretch",   
          paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          justifyContent: 'center',
          //alignItems: 'center',      
           },
    dayText:{
        fontSize:40,
        textTransform:"capitalize",
        
        letterSpacing:3,
        color:"#fe427a",
    },
    nowTxt:{
        fontSize:28,
        letterSpacing:3,
        color:"#c642fe",
        textAlign:"right",

    },
    dayTextHld:{
        width:"90%",
        alignSelf:"center",
        borderBottomColor:"black",
        borderBottomWidth:1,
        paddingVertical:10,
    },
    nowTxtHld:{
        width:"90%",
        alignSelf:"center",
        paddingVertical:7.5
    },
})
