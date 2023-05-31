import React,{useState} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet,Alert,ImageBackground,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import ContactForm from './Screens/ContactForm';
import Dashboard from './Screens/Dashboard';
import DetailsScreen from './Screens/DetailsScreen';
import OrderConfirm from './Screens/OrderConfirm';
import Forget from './Screens/Forget';
import Bouqutes from './Screens/Bouqutes';
import Payments from './Screens/Payments';
import Decor from './Screens/Decor';
import Arrange from './Screens/Arrange';
import Events from './Screens/Events';

//const Tab = createStackNavigator();


const Stack=createStackNavigator();
function App(){
  return(<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Register" component={Register} />
  <Stack.Screen name="ContactForm" component={ContactForm} />
  <Stack.Screen name="Dashboard" component={Dashboard} />
  <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  <Stack.Screen name="OrderConfirm" component={ OrderConfirm} />
  <Stack.Screen name="Forget" component={ Forget} />
  <Stack.Screen name="Bouqutes" component={Bouqutes} />
  <Stack.Screen name="Payments" component={ Payments} />
  <Stack.Screen name="Decor" component={Decor} />
  <Stack.Screen name="Arrange" component={Arrange} />
  <Stack.Screen name="Events" component={Events} />

   </Stack.Navigator>
  </NavigationContainer>);
}
export default App;


