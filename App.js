import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Expo from 'expo';
import {createStackNavigator} from 'react-navigation';
import Regform from'./components/Regform'

class Login extends React.Component{
  static navigationOptions = {
    title: 'Login',

  };
  render(){
    const{ navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text
        onPress= { ()=> navigate('Regform') }> Navigate to Regform
        </Text>
      </View>
    );
  }
}

const Navigationapp = createStackNavigator({
  Login: { screen:Login},
  Regform: {screen:Regform},
},  {
    navigationOptions:{
      headerStyle: {
        backgroundColor: 'red'
      }
    }
  }
)
export default class App extends React.Component {
  render() {
    return <Navigationapp/>;
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
