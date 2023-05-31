import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View ,Text, Image,TouchableOpacity} from "react-native";

const Home = ({navigation})=>{
   
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.contentCenter}>
                  <Image source={require('../assets/Beth-and-Rose-Florist-Logo-removebg-preview.png')} style={{width:300,height:250,marginTop:50,marginBottom:20}}/>
                  </View>
                
                <View style={styles.container}>
                    <Text style={{color:"#8a0030",textAlign:'center',fontSize:14,fontWeight:'bold'}}>Welcome to our flower shop</Text>
                    <Text style={{color:"#8a0030",textAlign:'center',fontSize:14,fontWeight:'bold'}}> where you can find a stunning selection of beautiful and fresh flowers for any occasion</Text>
                </View>
                <View>
                        <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={styles.defaultButton }>
                        
                            <Text style={{textAlign:'center',fontSize:16,color:'#ffdeeb',fontWeight:"bold"}} >Start</Text>
                            
                        </TouchableOpacity>
                        
                       
                    </View>
                    
            </ScrollView>
        </SafeAreaView>
        
      
    )
}



export default Home;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'ash',
        padding:40,
        marginTop:20,
        marginBottom:20,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        
    },
    defaultButton:{
        padding:10,
        backgroundColor:'#8a0030',
        borderRadius:10,
        marginTop:80,
        marginBottom:120,
        width:'80%',
        marginLeft:40
         
    },
    contentCenter:{
    justifyContent:'center',
    alignItems:'center'
  }
    
    
});