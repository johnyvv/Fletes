import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, StatusBar, Alert} from 'react-native';


export default class MenuScreen extends Component{
    static navigationOptions = {
      header: null
    }
  
    render(){
      return(
        <View style={styles.container}>
            <View>
                <Text 
                style={{fontFamily: 'Helvetica', fontSize: 40, fontWeight: 'bold', textAlign: 'center', letterSpacing: 5}}>
                      BIENVENIDO
                </Text>
                <Text 
                style={{fontFamily: 'Helvetica', fontSize: 20, textAlign: 'center', paddingTop: 30, paddingBottom: 20}}>
                    ¿Qué tipo de informe desea realizar?
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Inv')} >
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                        Entrada
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Inv')} >
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                         Salida
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                     style={{alignItems:'center', paddingTop: 50}}
                     onPress={() => this.props.navigation.goBack(null)}>
                    <Text style={{
                        fontFamily: 'Helvetica', fontSize: 20, 
                        fontWeight: 'bold', color: '#2196F3',
                        textDecorationLine:'underline'}}>
                         Cerrar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      //backgroundColor: '#F5FCFF',
    },
    button:{
      justifyContent: 'center', 
      alignItems:'center', 
      backgroundColor: '#2196F3',
      paddingVertical: 15,
      paddingLeft: 100,
      paddingRight: 100,
      marginTop: 40,
      borderRadius: 20
    },
});