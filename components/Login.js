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
import { METHODS } from 'http';
const fetch = require('cross-fetch');
export default class Login extends React.Component {
        static navigationOptions = {
            header:null,
        
          };
        constructor(props){
            super(props);
            this.state={
                usuario: '',
                senha: '',
            }
        }
        componentDidMount(){
            this._loadInitialState().done();
        }

        _loadInitialState =async () =>{
            var value = await AsyncStorage.getItem('usuario');
            if (value !== null) {
                this.props.navigation.navigate(profile)
            }
        }
        render() {
        return(
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}  >
        
            <View style={styles.container}>

                <Text style={styles.header}> LOGIN </Text>
                <TextInput 
                    style={styles.textInput} placeholder='Usuario' 
                    onChangeText={(usuario) => this.setState({usuario})}
                    underlineColorAndroid='transparent'
                />
                <TextInput 
                    style={styles.textInput} placeholder='Senha' 
                    onChangeText={(senha) => this.setState({senha})}
                    underlineColorAndroid='transparent'
                />
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
      login = () => {
          fetch('https://192.168.0.104:3000/users',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json'
            }, 
            body: JSON.stringify({
                usuario: this.state.usuario,
                senha: this.state.senha,
            })
      })
      .then((response) => response.json() )
      .then((res) =>{
          if(res.success === true){
              AsyncStorage.setItem('usuario',res.usuario);
              thys.prpos.navigation.navigate('Profile');
          }
          else{
              alert(res.message);
          }
      })
      .done();


      };
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