import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts } from '../redux/action'
import Icon from 'react-native-vector-icons/dist/Entypo'
import CustomButton from '../components/CustomButton'



function Home() {
  const products = useSelector(state => state.products)

  const fetchMovies = () => dispatch(getProducts());

  const dispatch = useDispatch()

  const addItemToCart = item => {
    dispatch(addToCart(item))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}

        numColumns={2}
        renderItem={({ item }) =>

        (
          <View style={{
            height: 340, width: 179, margin: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0.5, height: 0.5 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 1,
          }}>
            <View style={styles.bookItemContainer}>

              <Image
                source={{ uri: item.image }}
                style={{
                  height: 250, width: 170, borderWidth: 1,

                }}
                resizeMode='contain'
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.price}$</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="star" size={10} color="#900" />
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.rating.rate}</Text>
                </View>
              </View>
              <Text numberOfLines={1} style={{ marginHorizontal: 5 }}>{item.title}</Text>
              <View style={{flexDirection:'row',justifyContent:'flex-end',margin:10}}>
              <CustomButton>

                <TouchableOpacity
                  onPress={() => addItemToCart(item)}
                >
                  <Text style={styles.buttonText}>Add +</Text>
                </TouchableOpacity>
              </CustomButton>
              </View>

            </View>

          </View>
        )

        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookItemContainer: {


  },
  thumbnail: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400'
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#24a0ed',
    padding: 5
  },
  buttonText: {
    fontSize: 15,
    color: '#fff'
  }
})

export default Home