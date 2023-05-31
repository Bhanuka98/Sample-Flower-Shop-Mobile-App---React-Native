import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View  } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen =({navigation,route}) => {



  const handleBuy = () => {
      navigation.navigate('OrderConfirm');
  };


  const plant=route.params;
  return (<SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    <View  style={style.header}> 
      <TouchableOpacity onPress={()=> navigation.navigate("ContactForm")}>
        <Ionicons name="mail" size={32} color="#800000" onPress={() => navigation.navigate('ContactForm')} />
      </TouchableOpacity>

    </View>
    <View style={style.imageContainer}>
    <Image source={require('../assets/pexels-secret-garden-2879812-removebg-preview.png')} style={{resizeMode:'contain',flex:1} }/>
    </View>
    <View style={style.detailsContainer}>
      <View style={{marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}>
        <View style={style.line}>
            <Text style={{fontSize:13,fontWeight:'bold'}}>Best Choice</Text>
        </View>
      </View>

      <View style={{marginLeft:20,marginTop:18,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>Flower</Text>

        <View style={style.priceTag}>
          <Text style={{marginLeft:15,color:'white',fontWeight:'semibold', fontSize:15,}}>$40.99</Text>
        </View>

      </View>

      <View style={{marginTop:12,paddingHorizontal:20,}}>
        <Text style={{fontWeight:'semibold', fontSize:13,}}>About</Text>

        <Text style={{marginTop:12,color:'gray',lineHeight:15, fontSize:14,textAlign:'justify'}}>Now is the winter of our discontent
Made glorious summer by this sun of York; And all the clouds that lour'd upon our houseIn the deep bosom of the ocean buried.Now are our brows bound with victorious wreaths;Our bruised arms hung up for monuments;Our stern alarums changed to merry meetings,Our dreadful marches to delightful measures.
</Text>
        <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-between',}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          </View>
        </View>
      </View>
    </View>
  </SafeAreaView>
  );
};

const style=StyleSheet.create({
  header:{
    paddingHorizontal:20,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  imageContainer:{
    flex:0.50,
    paddingTop:20,
    margintop:20,
    justifyContent:'center',
    alignItems:'center',
  },

  detailsContainer:{
    flex:0.45,
    backgroundColor:'#ECECEC',
    marginHorizontal:7,
    marginBottom:-50,
    borderRadius:20,
    marginTop:20,
    paddingTop:20,
  },
  line:{
    width:90,
    height:2,
    backgroundColor:"#444444",
    marginBottom:3,
    marginTop:1,
  },
  priceTag:{
    backgroundColor:'#8a0030',
    width:80,
    height:35,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    justifyContent:'center',
  },

});

export default DetailsScreen;