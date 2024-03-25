import { useState, useEffect } from "react";
import {Text, View} from 'react-native';
import CheckOut from "./CheckOut";
import Product from "./Product";

const ShoppingHome = () => {

    //empty cart that may contain multiple product information
    const [cart, setCart] = useState([]);

    //receving function
    //receive data from nested/child component
    const receiveQty = (dataFromChildCompo) => {
        console.log(`data from child component : 
         name : ${dataFromChildCompo.nm} 
         price : ${dataFromChildCompo.uprice}
         quantity : ${dataFromChildCompo.qty}`);

         //update the cart

         //copy the existing cart to temporary
         let tempCart = [...cart];

         //check if the product already exists in the cart
        let found = false;

        for (let i = 0 ; i < tempCart.length ; i++){
            if (tempCart[i].nm === dataFromChildCompo.nm){
                //if so, modify the quantity
                found = true;
                tempCart[i] = dataFromChildCompo;
                break;
            }
        }

        if(found === false){
            //otherwise, product not found in the cart
            //add the product into the cart
            tempCart.push(dataFromChildCompo);
        }

         //set the cart state with modifications in tempCart
         setCart(tempCart)
    }

    //componentDidMount()
    useEffect( () => {
        //called the first time component is created
        console.log(`Executed before the component is added to the DOM.`);

        //reset the cart
        setCart([]);
        
    }, []);

    //componentDidUpdate()
    useEffect( () => {
        //will be called everytime the component receives new state or prop
        console.log(`called everytime the component receives new state or prop`);
    });

    return(
        <View>
            <Text> Welcome to the store </Text>
            <Product name="Shirt" unitPrice={15.00} quantitySelected = {receiveQty}></Product>
            <Product name="T-Shirt" unitPrice={5.00} quantitySelected = {receiveQty}></Product>
            <Product name="Umbrella" unitPrice={3.29} quantitySelected = {receiveQty}></Product>
            <Product name="Water Bottle" unitPrice={12.79} quantitySelected = {receiveQty}></Product>

            <CheckOut userCart = {cart}/>
        </View>
    );
}

export default ShoppingHome;