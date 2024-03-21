import {StyleSheet, View, Text} from 'react-native'
import { useState } from 'react'
import Product from './Product'
import Checkout from './Checkout'

const ShoppingHome = () => {

    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([
        {id: 101, productName: 'Shirts', unitPrice: 20.90, stock: 10, quantity: 0},
        {id: 102, productName: 'Shoes', unitPrice: 45.00, stock: 35, quantity: 0},
        {id: 103, productName: 'Trouser', unitPrice: 32.99, stock: 1, quantity: 0},
        {id: 104, productName: 'Hoodie', unitPrice: 63.99, stock: 3, quantity: 0}, 
    ])


    // lift the data from the child to parent
    const receiveProductInfo = (dataFromChild) => {
        console.log(`data received from child : ${JSON.stringify(dataFromChild)}`);

        console.log(`cart BEFORE adding object : ${JSON.stringify(cart)}`);

        let tempCart = [...cart]
        let found = false

        // // update the quantity if the product is already in the cart
        // for (let i = 0; i < tempCart.length; i++) {
        //     if (tempCart[i].id === dataFromChild.id) {
        //         tempCart[i].quantity = dataFromChild.quantity
        //         found = true
        //         break;
        //     }
        // }

        // // otherwise, add the product to cart
        // if (found == false) {
        //     tempCart.push(dataFromChild)
        // }

        const matchingIndex = tempCart.findIndex(item => item.id === dataFromChild.id)
        if (matchingIndex !== -1) {
            // matching product found in the cart
            // update the quantity
            tempCart[matchingIndex].quantity = dataFromChild.quantity
        } else {
            tempCart.push(dataFromChild)
        }

        setCart(tempCart)

        // setCart([...cart, {dataFromChild}])

        console.log(`cart AFTER adding object : ${JSON.stringify(cart)}`)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Shopping World</Text>

            <Text style={styles.textInfo}>Product Information</Text>

            {
                products.map((prod, index) => (
                    // send the product object as a prop to the Product Component
                    // sending data from parent to child component
                    // prop drilling
                    <Product currentProduct = {prod} productSelected = {receiveProductInfo} />
                    // <Product currentProduct = {prod} myNumber = {10} />
                   
                ))
            }

            <Checkout userCart = {cart} />

        </View>
    )
}

export default ShoppingHome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 50,
      margin: 10,
      padding: 10
    },
    title: {
      fontSize: 25,
      color: 'darkblue',
      fontWeight: 'bold'
    },
    textInfo: {
        fontSize: 20,
    }, 
    button: {
        backgroundColor: '#2196F3'
    }
});