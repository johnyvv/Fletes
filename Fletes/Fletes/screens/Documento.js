import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import email from 'react-native-email';

export default class DocScreen extends Component{
    static navigationOptions = {
        header: null
      }
      constructor(props){
          super(props);
          this.state = {
              Oper: this.props.navigation.state.params.Operador,
              Cam: this.props.navigation.state.params.Camion,
              Rem: this.props.navigation.state.params.Remolque,
              option: this.props.navigation.state.params.option,
              option2: this.props.navigation.state.params.option2,
              option3: this.props.navigation.state.params.option3,
              option4: this.props.navigation.state.params.option4,
              option5: this.props.navigation.state.params.option5,
              option6: this.props.navigation.state.params.option6,
              option7: this.props.navigation.state.params.option7,

          }
      }
    

      render(){
          return(
            <View style={{justifyContent:'center', paddingTop:30, alignItems:'center'}}>
              <View style={{justifyContent:'center'}}>
                  <Text style={{fontFamily: 'Helvetica', fontSize:40, fontWeight: 'bold'}}>REPORTE</Text>

                
              </View>
              <View style={{paddingTop:60, flexDirection:'column'}}>

                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>ID Operador: {this.props.navigation.state.params.Operador}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>ID Camion: {this.props.navigation.state.params.Camion}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>ID Remolque: {this.props.navigation.state.params.Remolque}</Text>
              </View>
              <View style={{paddingTop:20}}>

              </View>

              <View style={{paddingTop:30}}>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Antenas: {this.props.navigation.state.params.option}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Pipas: {this.props.navigation.state.params.option2}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Espejos: {this.props.navigation.state.params.option3}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Placas: {this.props.navigation.state.params.option4}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Rompevientos: {this.props.navigation.state.params.option5}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Cornetas: {this.props.navigation.state.params.option6}</Text>
                <Text style={{fontFamily: 'Helvetica', fontSize:20}}>Direccionales: {this.props.navigation.state.params.option7}</Text>
              </View>
              <View style={{paddingTop:20}}>
              <TouchableOpacity style={styles.button} onPress={this.handleEmail} > 
              <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                         Enviar Correo
                    </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style={{backgroundColor: '#949697', paddingVertical: 15, paddingLeft: 100, 
                  paddingRight: 100, marginTop: 40, borderRadius: 20, justifyContent: 'center', 
                  alignItems:'center', }} 
                  onPress={() => this.props.navigation.navigate('Menu')} > 
              <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                         Regresar
                    </Text>
              </TouchableOpacity>
              </View>
            </View>
          );
      }

      handleEmail = () => {
        const to = ['jonhvivi95@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['', ''], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'Reporte Inventario',
            body: `ID Operador: ${this.state.Oper}` + '\n' + `ID Camion: ${this.state.Cam}` +'\n'+ `ID Remolque: ${this.state.Rem}`
            +'\n' +'\n'+  `Reporte`+'\n'+ '\n'+`Antenas: ${this.state.option}` +'\n'+`Pipas: ${this.state.option2}` +'\n'+`Espejos: ${this.state.option3}`
            +'\n'+`Placas: ${this.state.option4}` +'\n'+`Rompevientos: ${this.state.option5}` +'\n'+`Cornetas: ${this.state.option6}`
            +'\n'+`Direccionales: ${this.state.option7}`
        }).catch(console.error)
    }
 }
 

 const styles = StyleSheet.create({
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