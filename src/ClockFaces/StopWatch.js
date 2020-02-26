import React, { Component } from 'react'
import { Text,StyleSheet,View,StatusBar,SafeAreaView,TouchableOpacity, ScrollView, InteractionManager } from 'react-native'
import Header from '../components/Header.js';
 
//let sClockStarted=false;
export default class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
          HrS:0,
          MinS: 0,
          SecS: 0,
          MsecS:0,
          ResetBtnVis:false,
          lapBtnVis:false,
          sClockStarted:true,      
      }    
      window.sClockInterval=null;
    }


    handleSWatchToggle=()=>{        
       // this.setState({ ResetBtnVis:true,lapBtnVis:true,sClockStarted:true})
       this.setState({
        
            sClockStarted: !this.state.sClockStarted
        },
        () => this.StartStopWatchStart()
    );


    }
   
    StartStopWatchStart=()=>{
          console.log(this.state.sClockStarted?"true":"false")
          InteractionManager.runAfterInteractions(()=>{
        if(!this.state.sClockStarted){
            this.setState({ ResetBtnVis:true,lapBtnVis:true});  
            
            window.sClockInterval = setInterval(() => {
               
                if (this.state.MsecS !== 10) {
                        this.setState({
                            MsecS: this.state.MsecS +1
                        });
                  } else if (this.state.SecS !== 59) {
                        this.setState({
                            MsecS: 0,
                            SecS: ++ this.state.SecS
                        });
                  } else {
                        this.setState({
                            MinS:++ this.state.MinS,
                            SecS: 0,
                            MsecS:0 
                        });
                }
            }, 1);
            console.log(window.sClockInterval)
        }else{
            clearInterval(window.sClockInterval);
            this.setState({
                MinS: 0,
                SecS: 0,
                MsecS:0,
                ResetBtnVis:false,
                lapBtnVis:false, 
                sClockStarted:true,         
            })
            
            //this.ResetStopwatch()
        }
      })
    }

    ResetStopwatch=()=>{

        console.log(window.sClockInterval)
    clearInterval(window.sClockInterval);
       this.setState({
            MinS: 0,
            SecS: 0,
            MsecS:0,
            ResetBtnVis:false,
            lapBtnVis:false, 
            sClockStarted:true,         
        })
         
        
        //reset flatlist values//

        //clear async storage 
    }
    LapStopwatch=()=>{
        
    }

    PadThis=(number)=>{
        if(number<10){ number ='0'+ number }
      return number
    }
    
    componentDidMount(){
        
     
    }
    render() {
        return (
            <>
            <StatusBar backgroundColor="#fe42d9"  barStyle="light-content" />
            <Header text="" title="StopWatch"/> 
            <SafeAreaView style={Styles.container}>
            <View contentInsetAdjustmentBehavior="automatic" >
            <View style={Styles.WatchHld}>
                <Text style={Styles.WatchTxt}>{this.PadThis(this.state.HrS) + ' : '}</Text>
                <Text style={Styles.WatchTxt}>{this.PadThis(this.state.MinS) + ' : '}</Text>
                <Text style={Styles.WatchTxt}>{this.PadThis(this.state.SecS) + ' : '}</Text>
                <Text style={Styles.WatchTxt}>{this.PadThis(this.state.MsecS)}</Text>
            </View>
            <ScrollView>


            </ScrollView>
            <View style={[Styles.WatchBtnsHld,{justifyContent:!this.state.sClockStarted?"space-between":"center"}]}>
                {this.state.ResetBtnVis &&                    
                    <TouchableOpacity style={Styles.WatchBtns} onPress={this.ResetStopwatch.bind(this)}>
                        <Text style={Styles.btnTxt}>Reset</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={Styles.WatchBtns} onPress={this.handleSWatchToggle.bind(this)}>
                    <Text style={Styles.btnTxt}>{!this.state.sClockStarted?"Stop":"Start"} </Text>
                </TouchableOpacity>
                {this.state.lapBtnVis &&
                    <TouchableOpacity style={Styles.WatchBtns} onPress={this.LapStopwatch.bind(this)}>
                        <Text style={Styles.btnTxt}>Lap</Text>
                    </TouchableOpacity>
                }
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
          alignSelf :"stretch",   
          paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          
           },
        WatchHld:{
            display:"flex",
            flexDirection:"row",
            borderBottomWidth:1,
            borderBottomColor:"#bfbfbf",
            width:"90%",
            alignSelf:"center",
            position:"relative",
            top:15,
            justifyContent:"center",
            paddingBottom:5,
        },
        WatchTxt:{
            fontSize:40,
        },
        WatchBtnsHld:{
            display:"flex",
            flexDirection:"row",
            width:"99%",
            alignSelf:"center",
            // position:"absolute",
            // bottom:"-785%",   
            //borderBottomWidth:0.6, 
            //borderBottomColor:"#c642fe", 
            paddingVertical:8,
        },
        WatchBtns:{
           width:"33%",
           paddingHorizontal:10,
           //flexGrow:2,
           //backgroundColor:"#fe42d9",
           borderTopLeftRadius:5,
           borderTopRightRadius:5,
           paddingVertical:7.5,
        
        },
        btnTxt:{
            fontSize:25,
            color:"#fe42d9",
            //textTransform:"lowercase",
            fontWeight:"500",
            textAlign:"center",
            letterSpacing:3,
        },
})

// import React, { Component } from 'react'
// import { Text, StyleSheet,View,StatusBar,SafeAreaView } from 'react-native'
// import Header from '../components/Header.js';




// export default class StopWatch extends Component {
//     render() {
//         return (
//             <>
//                 <StatusBar backgroundColor="#fe42d9"  barStyle="light-content" />
//                   <Header text="" title="StopWatch"/> 
//                     <SafeAreaView style={Styles.container}>
//                         <View contentInsetAdjustmentBehavior="automatic" >
                        
//                         </View>
//                     </SafeAreaView>
//             </>
           
//         )
//     }
// }

// const Styles = StyleSheet.create({})
