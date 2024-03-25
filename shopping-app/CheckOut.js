import { useState, useEffect } from "react";
import {Text, View, Button} from 'react-native';

const CheckOut = (props) => {

    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [finalBill, setFinalBill] = useState(0);

    const onCheckOutPressed = () => {
        let sum = 0;

        for (let i = 0; i < props.userCart.length ; i++){
            sum += props.userCart[i].qty * props.userCart[i].uprice;
        }
        
        let tx = sum * 0.13;
        let bill = sum + tx;

        setSubTotal(sum);
        setTax(tx);
        setFinalBill(bill);
    }

    //componentDidMount()
    useEffect( () => {
        //called the first time component is created
        console.log(`Executed before the component is added to the DOM.`);
    }, []);

    //componentDidUpdate()
    useEffect( () => {
        //will be called everytime the component receives new state or prop
        console.log(`called everytime the component receives new state or prop`);
    });

    return(
        <View>
            <Text> Checkout Information</Text>
            <Button title="CheckOut" onPress={onCheckOutPressed}/>
            <Text> Sub Total : $ {subTotal.toFixed(2)}</Text>
            <Text> Tax : $ {tax.toFixed(2)}</Text>
            <Text> Final Bill : $ {finalBill.toFixed(2)}</Text>
        </View>
    );
}

export default CheckOut;