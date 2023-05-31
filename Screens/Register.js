import React, { Component,useState } from "react";
import {Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from "react-native";

const Register = ({navigation})=>{

  const [usernames, setText]=useState('');
  const [passwords, setText1]=useState('');

    return (
        <SafeAreaView>
                
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../assets/Beth-and-Rose-Florist-Logo-removebg-preview.png')} resizeMode={'contain'} style={{width:'100%',height:100}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your Full Name" onChangeText={usernames=> setText(usernames)}
    defaultValue={usernames}/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={passwords=> setText1(passwords)} defaultValue={passwords}/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true}/>
                    </View>
                   
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => {
                            Alert.alert('successfully Registered!!');
                            navigation.navigate('Login',{ usernames,passwords });
                            }}>

                            <Text style={{textAlign:'center',fontSize:16,color:'#ffdeeb',fontWeight:'bold'}}>Register</Text>

                            <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
  
                            </TouchableOpacity>
                            
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ffdeeb',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                            <Text style={{color:"#8a0030",textAlign:'center',fontSize:12,fontWeight:'bold'}}>Already Have Account ? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
      
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
   formInput:{
     backgroundColor:'ash',
        marginTop:20,
        padding:7,
    },textInput:{
        padding:10,
        fontSize:12,
        borderWidth:1,
        borderColor:"#8a0030",
        borderRadius:10
    },defaultButton:{
        padding:10,
        backgroundColor:'#8a0030',
        borderRadius:10,
    }
});

export default Register;