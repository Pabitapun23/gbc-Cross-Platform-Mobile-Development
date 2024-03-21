import { useEffect, useState } from "react"
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Product = (props) => {

    const [quantity, setQuantity] = useState(0)
    const [enabled, setEnabled] = useState(false)

    // this code will be executed only when the component is created
    // as we have provided empty dependencies array [] as second parameter
    useEffect( () => {checkStock()}, [])

    const checkStock = () => {
        if (props.currentProduct.stock <= 0) {
            setEnabled(true)
        }
    }

    const increaseQuantity = () => {
        console.log(`Changing quantity`);
        let qty = quantity + 1

        if (props.currentProduct.stock <= 0) {
            alert(`The item is out of stock`)
            return
        }

        if (qty > props.currentProduct.stock) {
            alert(`We don't have more items in the stock`)
            return
        }

        setQuantity(qty)

        // this will call receiveProductInfo() function of ShoppingHome component
        props.productSelected({
            id: props.currentProduct.id,
            productName: props.currentProduct.productName,
            unitPrice: props.currentProduct.unitPrice,
            stock: props.currentProduct.stock,
            quantity: qty
        })
    }

    const decreaseQuantity = () => {
        console.log(`Changing quantity`);

        if (quantity === 0) {
            console.log(`quantity cannot be reduced beyond zero`);
            return
        }

        let qty = quantity - 1
        setQuantity(qty)

        // this will call receiveProductInfo() function of ShoppingHome component
        props.productSelected({
            id: props.currentProduct.id,
            productName: props.currentProduct.productName,
            unitPrice: props.currentProduct.unitPrice,
            stock: props.currentProduct.stock,
            quantity: qty
        })
    }

    return (
        <View style={styles.horizontalContainer}>
            <Text style={styles.textInfo}> {props.currentProduct.productName} ($ {props.currentProduct.unitPrice}) </Text>

            <TouchableOpacity style={styles.buttonBg} onPress={decreaseQuantity} disabled={enabled}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
            
            <Text style={styles.textInfo}> {quantity} </Text>
            
            <TouchableOpacity style={styles.buttonBg} onPress={increaseQuantity} disabled={enabled}>
                <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'lavender',
        margin: 10, 
        width: '100%'
    }, 
    textInfo: {
        fontSize: 20,
    },
    buttonBg: {
        fontSize: 20,
        backgroundColor: '#5533ff',
        width: 30, 
        height: 30, 
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})