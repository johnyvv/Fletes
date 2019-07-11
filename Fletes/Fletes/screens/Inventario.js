import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, TouchableOpacity, 
    KeyboardAvoidingView, StatusBar, Alert, Switch} from 'react-native';
    import {CheckBox} from 'native-base';
    import Documento from './Documento';


export default class InvScreen extends Component{
    static navigationOptions = {
        header: null
      }

    constructor(props) {
        super(props)
        this.state = {
            Operador: '',
            Camion: '',
            Remolque: '',
            one:false,
            two:false,
            tres:false,
            cuatro:false,
            five:false,
            six:false,
            siete:false,
            ocho:false,
            nine:false,
            ten:false,
            once:false,
            doce:false,
            thrirteen:false,
            fourteen:false,
            option:'',
            option2:'',
            option3:'',
            option4:'',
            option5:'',
            option6:'',
            option7:''
         
        }
      }
      state ={
 
      
      }
      
      
      onePressed(option){
      this.setState({one:true,two:false,option:option})
      //  Alert.alert('one');
      }
      
      
      twoPressed(option){
      this.setState({one:false,two:true,option:option})
      //  Alert.alert('two');
      }
      
      tresPressed(option2){
      this.setState({tres:true,cuatro:false,option2:option2})
      //  Alert.alert('one');
      }
      
      
      cuatroPressed(option2){
      this.setState({tres:false,cuatro:true,option2:option2})
      //  Alert.alert('one');
      }
      
      fivePressed(option3){
      this.setState({five:true,six:false,option3:option3})
      //  Alert.alert('one');
      }
      
      
      sixPressed(option3){
      this.setState({five:false,six:true,option3:option3})
      //  Alert.alert('one');
      }
      
      sietePressed(option4){
      this.setState({siete:true,ocho:false,option4:option4})
      //  Alert.alert('one');
      }
      
      
      ochoPressed(option4){
      this.setState({siete:false,ocho:true,option4:option4})
      //  Alert.alert('one');
      }
      
      ninePressed(option5){
      this.setState({nine:true,ten:false,option5:option5})
      //  Alert.alert('one');
      }
      
      
      tenPressed(option5){
      this.setState({nine:false,ten:true,option5:option5})
      //  Alert.alert('one');
      }
      
      oncePressed(option6){
      this.setState({once:true,doce:false,option6:option6})
      //  Alert.alert('one');
      }
      
      
      docePressed(option6){
      this.setState({once:false,doce:true,option6:option6})
      //  Alert.alert('one');
      }
      
      thrirteenPressed(option7){
      this.setState({thrirteen:true,fourteen:false,option7:option7})
      //  Alert.alert('one);
      }
      
      
      fourteenPressed(option7){
      this.setState({thrirteen:false,fourteen:true,option7:option7})
      //  Alert.alert('one');
      }
      
      verifyForm(){
          const{option, option2, option3, option4, option5, option6, option7,
        Operador, Camion, Remolque} =this.state
       try{
            if (option == '' || option2== '' || option3 == '' || option4 =='' || option5 == '' || option6 == '' || option7 == ''
            || Operador == '' || Camion == '' || Remolque == ''){
                Alert.alert('Formulario Incompleto', 'Favor de llenar todos los campos')
            }
            else{
                this.props.navigation.navigate('Doc', {Operador: this.state.Operador, Camion: this.state.Camion, 
                    Remolque: this.state.Remolque, option:this.state.option, option2:this.state.option2, option3:this.state.option3,
                    option4:this.state.option4, option5:this.state.option5, option6:this.state.option6, option7 :this.state.option7 })
            }
       }catch(err){

        }

     }

    render(){
        return(
            <View style={{justifyContent: 'flex-start'}}>
                <Text style={{fontFamily: 'Helvetica', textAlign: 'center', 
                fontSize: 20, fontWeight: 'bold', paddingTop: 50}}>
                    Inventario de Unidad</Text>

                <View style={{flexDirection: 'row', padding: 20,  
                paddingTop: 20, justifyContent: 'space-between'}}>
                    
                    <TextInput
                        placeholder="ID Operador"   
                        style={styles.TextInputStyleClass}
                        onChangeText={(Operador) => this.setState({Operador})}
                                        
                    />
                    <TextInput
                        placeholder="ID Camión"
                        style={styles.TextInputStyleClass}   
                        onChangeText={(Camion) => this.setState({Camion})}
                                                
                    />
                    <TextInput
                        placeholder="ID Remolque"  
                        style={styles.TextInputStyleClass}
                        onChangeText={(Remolque) => this.setState({Remolque})}
                                        
                    />
                </View>
           
           
                <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                <Text style={{paddingBottom:20, paddingEnd: 20, fontFamily: 'Helvetica', fontSize:20}}>
                Si         No
                </Text>

                    <View style={{flexDirection:'row', paddingEnd: 30}}>

                    <Text style={styles.Text}>Antenas</Text>
                    <View style ={{width:150}}/>

                    <CheckBox checked={this.state.one}
                    onPress={(option)=> this.onePressed('Si')}
                    />

                    <View style={{width: 50}} />
                    <CheckBox checked={this.state.two}
                    onPress={(option) => this.twoPressed('No')}
                    />
                        </View>


                        <View style={{flexDirection:'row', paddingEnd: 30, paddingTop:30}}>

                        <Text style={styles.Text}>Pipas</Text>
                        <View style ={{width:169}}/>

                        <CheckBox checked={this.state.tres}
                        onPress={()=> this.tresPressed('Si')}

                        />

                        <View style={{width: 50}} />
                        <CheckBox checked={this.state.cuatro}
                        onPress={() => this.cuatroPressed('No')}
                        />

                            </View>


                            <View style={{flexDirection:'row', paddingEnd: 30, paddingTop:30}}>

                            <Text style={styles.Text}>Espejos</Text>
                            <View style ={{width:154}}/>
                            <CheckBox checked={this.state.five}
                            onPress={()=> this.fivePressed('Si')}

                            />

                            <View style={{width: 50}} />
                            <CheckBox checked={this.state.six}
                            onPress={() => this.sixPressed('No')}
                            />

                                </View>


                                <View style={{flexDirection:'row', paddingEnd: 30, paddingTop:30}}>

                                <Text style={styles.Text}>Placas</Text>
                                <View style ={{width:162}}/>
                                <CheckBox checked={this.state.siete}
                                onPress={()=> this.sietePressed('Si')}

                                />

                                <View style={{width: 50}} />
                                <CheckBox checked={this.state.ocho}
                                onPress={() => this.ochoPressed('No')}
                                />

                                </View>


                                <View style={{flexDirection:'row', paddingEnd: 30, paddingTop:30}}>

                                <Text style={styles.Text}>Rompevientos  </Text>
                                <View style ={{width:104}}/>
                                <CheckBox checked={this.state.nine}
                                onPress={()=> this.ninePressed('Si')}

                                />

                                <View style={{width: 50}} />
                                <CheckBox checked={this.state.ten}
                                onPress={() => this.tenPressed('No')}
                                />

                                </View>

                              <View style={{flexDirection:'row', paddingEnd: 30, paddingTop:30}}>

                              <Text style={styles.Text}>Cornetas</Text>
                              <View style ={{width:146}}/>
                              <CheckBox checked={this.state.once}
                              onPress={()=> this.oncePressed('Si')}

                              />

                              <View style={{width: 50}} />
                              <CheckBox checked={this.state.doce}
                              onPress={() => this.docePressed('No')}
                              />

                              </View>

                              <View style={{flexDirection:'row', paddingEnd: 30, paddingTop:30}}>

                              <Text style={styles.Text}>Direccionales </Text>
                              <View style ={{width:100}}/>
                              <CheckBox checked={this.state.thrirteen}
                              onPress={()=> this.thrirteenPressed('Si')}

                              />

                              <View style={{width: 50}} />
                              <CheckBox checked={this.state.fourteen}
                              onPress={() => this.fourteenPressed('No')}
                              />

                              </View>
                                      
                </View>


                <View style={{flexDirection:'row', paddingTop: 70, marginHorizontal:20}}>
                <TouchableOpacity 
                    style={{backgroundColor: '#949697', paddingVertical: 15, paddingLeft: 20, paddingRight: 20,
                    marginTop: 10, marginBottom: 5, borderRadius: 20}}
                    onPress= {() => this.props.navigation.goBack(null)}>
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold',
                    color: 'white'}}>
                         Regresar
                    </Text>
                </TouchableOpacity>
                <View style ={{width:90}}/>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={_ => this.verifyForm() }>
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', 
                    color: 'white' }}>
                         Siguiente
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
          //alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#F5FCFF',
          margin: 20
        },
        radio: {
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingTop: 30,
          marginRight: 30,
          bottom: 10
        },
        list:{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingTop: 30,
            marginLeft: 30,
        },
        TextInputStyleClass: {
          textAlign: 'center',
          marginBottom: 7,
          height: 40,
          width: 110,
          borderWidth: 1,
           borderColor: 'silver',
           borderRadius: 15 
          },
          Text:{

            fontFamily: 'Helvetica',
            fontSize:15
          },
          button:{
            backgroundColor: '#2196F3',
            paddingVertical: 15,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10,
            marginBottom: 5,
            borderRadius: 20
          },

      });
      