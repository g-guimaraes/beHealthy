import React from 'react';

import { StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Facebook } from 'expo'

export default class Login extends React.Component {
        static navigationOptions = {
            header:null,
        
          };

        componentDidMount(){
            this._loadInitialState().done();
        }

        _loadInitialState =async () =>{
            var value = await AsyncStorage.getItem('user');
            if (value !== null) {
                //this.props.navigation.navigate(profile)
            }
        }
        render() {
        return(
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}  >
        
            <View style={styles.container}>

                <Text style={styles.header}> LOGIN </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.login}>
                    <Text>
                        Entrar
                    </Text>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        );   
      }
      
      login = async () => {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('1295079360636362', { permissions: ['public_profile']})
    
        if(type === 'success'){
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
            const data = await response.json()
            const res = JSON.stringify(data)
            alert(res)
            AsyncStorage.setItem('user', res);
            this.props.navigation.navigate('Profile');
        }
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container: {
        flex: 1,
        backgroundColor: '#9BCD9B',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header:{
        fontSize: 24,
        marginBottom: 60,
        color:'#fff',
        fontWeight:'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        marginBottom: 20,
        padding:16,
    },
    btn:{
        alignSelf: 'stretch',
        backgroundColor:'#698B69',
        padding:20,
        alignItems:'center',
    }
  });