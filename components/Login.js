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


    export default class Login extends React.Component {
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
            var value = await AsyncStorage.getItem('user');
            if (value !== null) {
                this.props.navigation.navigate(profile)
            }
        }
        render() {
        return(
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}  >
            <View style={styles.container}>

                <Text style={styles.header}>LOGIN</Text>
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
      login = () => {alert('teste')};
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
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
        backgroundColor:'#01c853',
        padding:20,
        alignItems:'center',
    }
  });