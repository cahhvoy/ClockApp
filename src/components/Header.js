import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={Styles.Header}>
                 <View style={Styles.HeaderTitle}>
                     <Text style={Styles.HeaderTitleTxt}>
                         {this.props.title}
                     </Text>
                 </View>
                 <View style={Styles.HeaderBody}>
                     <Text style={Styles.HeaderBodyTxt}>
                       {this.props.text}
                     </Text>
                 </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    Header:{
        backgroundColor:"#fe42d9",
       //borderTopWidth:0.95,
       //borderTopColor:"#fff"
       display:"flex",
       flexDirection:"column",
       height:72,
    },
    HeaderTitle:{       
       // height:17,
        //borderWidth:1,
        paddingVertical:0,
    },
    HeaderTitleTxt:{
        color:"#fff",
        fontSize:32,
        textAlign:"center",
        fontWeight:"normal",
        letterSpacing:3,
    },
    HeaderBody:{
      // height:25,
       //borderWidth:1,
       paddingVertical:0,
    },
    HeaderBodyTxt:{      
        color:"#fff",
        fontSize:23,
        textAlign:"center",
        fontWeight:"normal",
        letterSpacing:3,
    }
})
