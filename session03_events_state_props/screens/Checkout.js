import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

const Checkout = (props) => {

    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [finalBill, setFinalBill] = useState(0)

    const calculateBill = () => {
        console.log(`cart received : ${JSON.stringify(props.userCart)}`);

        let sum = 0

        props.userCart.forEach(product => {
            sum += product.quantity * product.unitPrice
        });

        setTotal(sum)

        let tax = sum * 0.13
        setTax(tax)

        let final = sum + tax
        setFinalBill(final)

    }

    // update automatically and show changes in realtime
    useEffect( () => {calculateBill()})

    // it'll change only when the creationg of the state
    // useEffect( () => {calculateBill()}, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Checkout information </Text>
            <Text style={styles.textInfo}> Total : $ {total.toFixed(2)}</Text>
            <Text style={styles.textInfo}> Tax : $ {tax.toFixed(2)}</Text>
            <Text style={styles.textInfo}> Final Bill : {finalBill.toFixed(2)} </Text>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'lavender',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
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
});