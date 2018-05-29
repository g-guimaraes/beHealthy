import React from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
    } from 'react-native';
    import {createStackNavigator} from 'react-navigation';

    class Login extends React.Component{
        static navigationOptions = {
          title: 'Login',
      
        };
        render(){
          const{ navigate } = this.props.navigation;
          return(
            <View>
              <Text
              onPress= { ()=> navigate('Regform') }> Navigate to Regform
              </Text>
            </View>
          );
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