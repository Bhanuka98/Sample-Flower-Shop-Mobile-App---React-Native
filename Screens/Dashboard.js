import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,SafeAreaView,Alert,Dimensions} from 'react-native';
import Constants from 'expo-constants';
var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;
import { Ionicons } from '@expo/vector-icons';


function LoginScreen({navigation}){
 
  
  return(
    <SafeAreaView style={styles.container}> 

    <View  style={styles.header}> 
      <TouchableOpacity onPress={()=> navigation.navigate("ContactForm")}>
        <Ionicons name="mail" size={32} color="#800000" onPress={() => navigation.navigate('ContactForm')} />
      </TouchableOpacity>

    </View>


<View style={styles.blance}>
<View style={styles.alin}>
<Image
   style={styles.imsize}
   source={require('../assets/Beth-and-Rose-Florist-Logo-removebg-preview.png')}/>
</View>

<View style={styles.alin}>
<Text style={styles.tt}>Welcome To</Text>
<Text style={styles.t}>Beth & Rose</Text>

</View>



            <View style={styles.paddingContainer}>
            <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
               
                navigation.navigate('Bouqutes');
            
            }}>
            <Text style={styles.buttonText}>Flower Bouqutes</Text>        
            </TouchableOpacity>
            

            
                <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
                
                navigation.navigate('Decor');
            
            }}>
            <Text style={styles.buttonText}>Gifts & Decor</Text>        
            </TouchableOpacity>
            </View>


            <View style={styles.paddingContainer}>
            <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
                navigation.navigate('Events');
            
            }}>
            <Text style={styles.buttonText}>Weddings & Events</Text>        
            </TouchableOpacity>
            

            
                <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => {
                  
              
                navigation.navigate('Arrange');
            
            }}>
            <Text style={styles.buttonText}>Arrangements</Text>        
            </TouchableOpacity>
            </View>

            </View>


            <View style={styles.alin}>
         

</View>


</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fffff',
    flex:1,
   

  },
    header:{
    paddingHorizontal:20,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  paddingContainer :
  {
   
    justifyContent:'space-between',
    flexDirection:"row" ,
    padding:20,
    paddingBottom:20  ,
    paddingTop:20  
  },
 blance:{
   paddingTop:50
 },
  buttonContainer :{
    backgroundColor:'#8a0030',
    paddingVertical:30,
    paddingHorizontal:30,
    borderRadius: 25,
    width:170,
    height:100,
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15
 
  },
  t:{
    
     color:'#8a0030',
     fontSize:45,
     fontWeight:'bold'
    
  },

    tt:{
    
     color:'black',
     fontSize:30,
     fontWeight:'bold'
    
  },
  alin:{
     justifyContent:'center',
     alignItems:'center',
     margin:10
},
  imsize:{
    width:200,
    height:150,
    
  }
});
export default LoginScreen;