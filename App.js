import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Expo from 'expo';
import {createStackNavigator} from 'react-navigation';


class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home',

  };
  render(){
    const{ navigate } = this.props.navigation;
    return(
      <View>
        <Text
        onPress= { ()=> navigate('Profile') }> Navigate to Profile
        </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component{
  static navigationOptions = {
    title: 'Profile',

  };
  render(){
    const{ navigate } = this.props.navigation;
    return(
      <View>
        <Text
        onPress= { ()=> navigate('Home') }> Navigate to Profile
        </Text>
      </View>
    );
  }
}


const Navigationapp = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen:ProfileScreen},
},  {
    navigationOptions:{
      headerStyle: {
       marginTop: Expo.Constants.statusBarHeight
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
