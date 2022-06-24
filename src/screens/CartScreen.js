import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet, Image
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/action";
;
import CustomButton from '../components/CustomButton';

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
const CartScreen = () => {


  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartItems)
  console.log(cartItems);

  function getUnique(arr, index) {

    const unique = arr
      .map(e => e[index])


      .map((e, i, final) => final.indexOf(e) === i && i)


      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }

  const filterList = getUnique(cartItems, 'id');

  const addItemToCart = item => {
    dispatch(addToCart(item))
  }

  const removeItemFromCart = item =>
    dispatch(removeFromCart(item))


  return (
    <View
      style={{
        flex: 1
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={filterList}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item, index }) => (
            <View style={styles.bookItemContainer} >
              <View style={{
                flexDirection: 'row',
                backgroundColor: '#fcba03',
                height: 100,
                width: '100%',
                borderRadius: 5,
                elevation: 5,
                justifyContent:'space-around',
                borderWidth: 1

              }}

              >


                <Image source={{ uri: item.image }}
                  style={{ height: 80, width: 60, marginTop: 10, marginLeft: 10 }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ width: 80, height: 100, justifyContent: 'center' }}>
                    <Text style={{
                      fontSize: 13, color: 'white',

                    }}

                    >{item.title}</Text>
                  </View>

                  <View style={{flexDirection:'row',width:150, justifyContent:'space-between'}}>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <CustomButton>
                      <TouchableOpacity onPress={() => removeItemFromCart(item)}>

                        <Text style={{ color: 'white', fontSize: 15, }}>-</Text>
                      </TouchableOpacity>
                      <Text style={{ color: 'white', fontSize: 15, }}>
                        {cartItems.filter(items => items.id == item.id).length}
                      </Text>
                      <TouchableOpacity onPress={() => addItemToCart(item)}>
                        <Text style={{ color: 'white', fontSize: 15, }} >+</Text>

                      </TouchableOpacity>
                    </CustomButton>
                  </View>
                  <Text style={{
                    fontSize: 15, color: 'black',

                  }}
                    numberOfLines={1}
                  >{item.price}$</Text>
                </View>
                </View>




              </View>


            </View>
          )}

        />

      )

        : (
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>Your cart is empty :'(</Text>
          </View>
        )}
   
    </View>
  )
}
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10
  },

})