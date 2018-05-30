import React from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
  } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from'./components/Login';
import Regform from'./components/Regform';



const Navigationapp = createStackNavigator({
  Home: { screen:Login},
  Regform: {screen:Regform},
},  {
    navigationOptions:{
      title:'BeeHealthy',
     header:false,
    }
  }
);
export default class App extends React.Component {
  render() {
    return (
      <Navigationapp/>
    );
    
  }
}
