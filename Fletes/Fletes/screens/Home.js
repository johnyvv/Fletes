import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert} from 'react-native';


export default class HomeScreen extends Component{  
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props)
    this.state = {
 
      User: '',
      Password: ''
 
    }
  }
  checkLogin(){
    const {User, Password} = this.state
   if (User == 'johnv' && Password == '12345'){ 
      this.props.navigation.navigate('Menu');
      this.refs.name.clear()
      this.refs.pass.clear()
    }
    else{
      Alert.alert('Error','Usuario y/o Contraseña incorrectos')
      this.refs.name.clear()
      this.refs.pass.clear()
    }
  } 
  render() {
    return (
     <KeyboardAvoidingView behavior="position" enabled>
       <StatusBar hidden/>
       <View style={{alignItems:'center', justifyContent:'center'}}>
          <Image 
            source ={require('./fletes.png')} style={{resizeMode: 'center'}}/> 
       </View>

      <View style={{alignItems:'center', justifyContent:'flex-start'}}>

        <TextInput
          ref="name"
            placeholder="Usuario"
            onChangeText={User => this.setState({User})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            autoCapitalize = 'none'
          />
        <TextInput
          ref="pass"
            placeholder="Contraseña"
            onChangeText={Password => this.setState({Password})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass} 
            secureTextEntry={true}
            autoCapitalize = 'none'
          />
        <TouchableOpacity 
          style={styles.button} 
          onPress={_ => this.checkLogin()}>
            <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Iniciar Sesión
            </Text>
        </TouchableOpacity>
       
      </View>  
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#2196F3',
      paddingHorizontal: 100,
      paddingVertical: 15,
      borderRadius: 20
    },
    TextInputStyleClass: {
      fontFamily: 'Helvetica',
      fontSize: 17,
      textAlign: 'center',
      marginBottom: 40,
      height: 45,
      width: 325,
      borderWidth: 2,
       borderColor: '#2196F3',
       borderRadius: 15 ,
      },
  });