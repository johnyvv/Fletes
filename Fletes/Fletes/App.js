import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import MenuScreen from './screens/Menu';
import InvScreen from './screens/Inventario';
import DocScreen from './screens/Documento';


    const AppNavigator = createStackNavigator({
      Home: HomeScreen,
      Menu: MenuScreen,
      Inv: InvScreen,
      Doc: DocScreen
    });

  const AppContainer = createAppContainer(AppNavigator);



  export default class App extends Component {
    render(){
      return <AppContainer/>;
    }
  }


