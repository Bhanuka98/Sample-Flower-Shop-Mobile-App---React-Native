import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert,Dimensions } from 'react-native';
var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;


function Events ({navigation}) {


  const [cartItems, setCartItems] = useState([]);

  const products = [

      

    { id: '1', name: 'Deasy Bouquet', price:2300,image: require('../assets/pexels-secret-garden-2879812.jpg') },
    { id: '2', name: 'Mixed Bouquet', price:2800 ,image: require('../assets/pexels-secret-garden-931158.jpg') },
    { id: '3', name: 'Rose Bouquet', price:2300 , image: require('../assets/red-roses-bouquet-table.jpg') },
    { id: '4', name: 'Rose Bouquet',price:1000, image: require('../assets/top-view-beautiful-roses-bouquet-with-pink-ribbon.jpg') },
    { id: '5', name: 'Mixed Bouquet', price:2500, image: require('../assets/beautiful-wedding-bouquet-roses.jpg') },
    { id: '6', name: 'Rose Bouquet', price:2300, image: require('../assets/pexels-pixabay-67567.jpg') },
    { id: '7', name: 'Rose Bouquet', price:1500, image: require('../assets/pexels-pixabay-67567.jpg') },
    { id: '8', name: 'Deasy Bouquet', price:2000, image: require('../assets/pexels-secret-garden-2879812.jpg') },
    { id: '9', name: 'Mixed Bouquet', price:2800, image: require('../assets/pexels-secret-garden-931158.jpg') },

     
   
    
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    Alert.alert('Success', 'Product added to cart');
  };

  

const removeFromCart = (product) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  setCartItems(updatedCartItems);
  Alert.alert('Success', 'Product removed from cart');
};




  const handlePayment = () => {
    if (cartItems.length > 0) {
      const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
      Alert.alert('Youre Payment Cost:--', `Total amount: Rs${totalAmount}`);
      setCartItems([]);
      navigation.navigate("Payments");
      
    } else {
      Alert.alert('Error', 'Your cart is empty');
    }
  };


  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
    
      <TouchableOpacity onPress={()=> navigation.navigate('DetailsScreen')}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.itemtext}>{item.name}</Text>
        <Text style={styles.itemtext}>{item.author}</Text>
        <Text style={styles.pricetext}>Price: LKR {item.price}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
      <Text style={styles.buttonText}>Remove</Text>
    </TouchableOpacity>

    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text >{item.name}</Text>
        <Text>Price: Rs {item.price}</Text>
        <Text>Author {item.author}</Text>
      </View>
    </View>
  );

  return (

    <View style={styles.container}>
  
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>

      
      <TouchableOpacity 
      onPress={() => navigation.navigate("Payments")}>
      
      </TouchableOpacity>
      <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>CART</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
    
      
    </View>

  );
 
}

const styles = {
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  productItem: {
    marginBottom: 20,
    //alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    flex:1,
    
    
  },
  addButton: {
    position:'absolute',
    backgroundColor: '#8a0030',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:118,
    bottom:15
    
  },
  paymentButton: {
    backgroundColor: '#8a0030',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },

  pricetext:{
    fontSize:15,
    left:170,
    bottom:80
  },

  itemtext:{

    fontSize:15,
    fontWeight:'bold',
    left:165,
    bottom:90
  },

  removeButton:{

    position:'absolute',
    backgroundColor: '#8a0030',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:220,
    bottom:15
  },

  image1:{

    height:35,
    width:35,
    top:44,
    left:55
  }
};

export default Events;

