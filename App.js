// import React, { PureComponent } from 'react'
// import  BotTabNav from './src/navigation/MainNavigation.js';

// export default class App extends PureComponent {
//   render() {
//     return  <BotTabNav/>
//   }
// }

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
