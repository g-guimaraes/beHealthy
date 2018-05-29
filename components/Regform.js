import React from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
    } from 'react-native';
    import {createStackNavigator} from 'react-navigation';

    
export default class Regform extends React.Component {
    static navigationOptions = {
        title: 'Regform',
    
      };
    render() {
    return(
    <View style={styles.regform}>
        <Text>testando</Text>
    </View>



    );
    
  }
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    backgroundColor: '#36485f',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});