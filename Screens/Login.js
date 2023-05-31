import React, { Component ,useState} from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert} from "react-native";
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';

const Login = ({navigation})=>{

  const [username, setText]=useState('');
  const [password, setText1]=useState('');

  const route = useRoute();
  const { usernames, passwords } = route.params ?? {};
  
    return (
        <SafeAreaView>
            <ScrollView>
            
                <View style={{padding:10,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../assets/Beth-and-Rose-Florist-Logo-removebg-preview.png')} resizeMode={'contain'} style={{width:'100%',height:100}}/>
                        </View>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TextInput
                        style={styles.input}
                        placeholder='email or username'
                        onChangeText={username=> setText(username)}
                        defaultValue={username}
                        returnKeyType="next">
                        </TextInput>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                        placeholder='password'
                        secureTextEntry
                        style={styles.input}
                        onChangeText={password=> setText1(password)}
                        defaultValue={password}
                        returnKeyType="go">
                        </TextInput>
                    </View>


                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Forget")}>
                            <Text style={{color:"#1260cc",textAlign:'right',fontSize:12,}}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.formInput}>
                    <TouchableOpacity 
                    style={styles.defaultButton}
                    onPress={() => {
                      var uname=username;
                      var pword=password;
                      if(uname===usernames && pword===passwords){
                        navigation.navigate('Dashboard');}

                      else if(uname=="22" && pword=="123"){
                        Alert.alert('successfully logged in!!');
                        navigation.navigate('Dashboard');
                      }
                      else{
                        Alert.alert("Incorrect username or Password");
                      }
                    }}>
                    <Text style={styles.buttonText}>Login</Text>
                    

                  <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}>
                  
                    </TouchableOpacity>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formInput}>
                        <Text style={{textAlign:'center'}}>or</Text>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity style={{marginRight:10}}>
                                <Image source={require('../assets/google.png')} style={{width:40,height:40,borderRadius:1000}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}}>
                                <Image source={require('../assets/facebook.png')} style={{width:40,height:40,borderRadius:1000}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ffdeeb',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                            <Text style={{color:"#ba1141",textAlign:'center',fontSize:12,fontWeight:'bold'}}>Need Account ? Register now! </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    formInput:{
      marginTop:20,
        padding:7,
    },

    defaultButton:{
        padding:10,
        backgroundColor:'#8a0030',
        borderRadius:10,
        
    },
      input:{
        padding:10,
        fontSize:13,
        borderWidth:1,
        borderColor:"#8a0030",
        borderRadius:10,
  },
    buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
  }
});

export default Login;