import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from "react-native";

const Forget = ({navigation})=>{
    return (
        <SafeAreaView>
            <ScrollView>
                
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../assets/Beth-and-Rose-Florist-Logo-removebg-preview.png')} resizeMode={'contain'} style={{width:'100%',height:100}}/>
                        </View>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address"/>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={()=> navigation.navigate("Home")}  >
                            
                            <Text style={{textAlign:'center',fontSize:16,color:'#ffdeeb'}}>Send Reset Link</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ffdeeb',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                            <Text style={{color:"#8a0030",textAlign:'center',fontSize:12,fontWeight:'bold'}}>Already Have Account? Login</Text>
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

export default Forget;