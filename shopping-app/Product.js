import { useState } from "react";
import {Button, Text, View} from 'react-native';

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => {

        let newQty = quantity + 1;
        setQuantity(newQty);
        // setQuantity(quantity + 1);

        console.log(`Quantity increased to ${quantity} -- newQty : ${newQty}`);
        //send the data to parent component
        props.quantitySelected( {nm: props.name, uprice: props.unitPrice, qty: newQty} );
    }

    const decreaseQty = () => {

        if(quantity === 0){
            console.log(`Quantity cannot be less than 0.`);
            return;
        }

        let newQty = quantity - 1;
        setQuantity(newQty);

        // setQuantity(quantity - 1);
        console.log(`Quantity decreased to ${quantity} -- newQty : ${newQty}`);
        props.quantitySelected( {nm: props.name, uprice: props.unitPrice, qty: newQty} );
    }

    return(
        <View>
            <Text> Name : {props.name} UnitPrice : $ {props.unitPrice} </Text>
            <Button title="-" onPress={decreaseQty}/>
            <Text>Quantity : {quantity}</Text>
            <Button title="+" onPress={increaseQty}/>
        </View>
    );
}

export default Product;