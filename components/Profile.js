import React from 'react';

import { StyleSheet,
    Text,
    View,
    TextInput,
    } from 'react-native';
import {createStackNavigator} from 'react-navigation';

const fetch = require('cross-fetch');
export default class Profile extends React.Component {
        
        render() {
        return(
        
        
            <View style={styles.container}>

                <Text style={styles.text}> Perfil </Text>
                
            </View>
        );   
      }
      
    }
    const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#9BCD9B',
         alignItems: 'center',
         justifyContent: 'center',
         paddingLeft: 40,
         paddingRight: 40,
     },
     text:{
          fontSize: 24,
          marginBottom: 60,
          color:'#fff',
          fontWeight:'bold',
      }
   });
