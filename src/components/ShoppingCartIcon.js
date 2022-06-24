import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/action";

function ShoppingCartIcon() {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartItems)
  function getUnique(arr, index) {

    const unique = arr
      .map(e => e[index])

      
      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }

  const filterList = getUnique(cartItems, 'ItemId');

  const addItemToCart = item => {
    dispatch(addToCart(item))
  }

  const removeItemFromCart = item =>
    dispatch(removeFromCart(item))


  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Icon name='shopping-cart' size={32} color='#101010' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ShoppingCartIcon