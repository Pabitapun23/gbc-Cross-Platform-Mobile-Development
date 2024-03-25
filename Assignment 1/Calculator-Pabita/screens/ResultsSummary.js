import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';

const ResultsSummary = ({
    gasMileage,
    metrics
}) => {
    // update automatically and show changes in realtime
    useEffect(() => {
        calculateResults();
    }, [gasMileage, metrics]);

    const [gasVehicleDistTravel, setGasVehicleDistTravel] = useState(0)
    const [evDistTravel, setEVDistTravel] = useState(0)
    const [distDifference, setDistDifference] = useState(0)
    const [savings, setSavings] = useState(0)

    // Calculate results
    const calculateResults = () => {

        // Parse input values to numbers
        const gasPricePerLNum = parseFloat(metrics.gasPricePerL);
        const gasMileageNum = parseFloat(gasMileage);
        const utilitiesCostNum = parseFloat(metrics.utilitiesCost);
        const evMileageNum = parseFloat(metrics.evMileage);
        const annualDistanceNum = parseFloat(metrics.annualDistance);

        // KM a gas car can drive for the cost of 1 liter of gas:
        const gasCarDistancePerL = gasMileageNum
        setGasVehicleDistTravel(gasCarDistancePerL);

        console.log(gasPricePerLNum)
        console.log(gasMileageNum)
        console.log(utilitiesCostNum)
        console.log(evMileageNum)
        console.log(annualDistanceNum)


        // KM an electric car can drive for the cost of 1 litre of gas
        const electricCarDistancePerLofGasCost = evMileageNum * (gasPricePerLNum / utilitiesCostNum);

        // How much further can the electric car travel?
        const additionalDistance = Math.abs(gasCarDistancePerL - electricCarDistancePerLofGasCost);
    

        // How much does the user save per year by driving an electric car

        /*
        Estimated electric car savings:
        𝑠𝑎𝑣𝑖𝑛𝑔𝑠 = (𝑎𝑛𝑛𝑢𝑎𝑙 𝑔𝑎𝑠 𝑐𝑜𝑠𝑡) − (𝑎𝑛𝑛𝑢𝑎𝑙 𝑒𝑙𝑒𝑐𝑡𝑟𝑖𝑐𝑖𝑡𝑦 𝑐𝑜𝑠𝑡)
        The amount spent on gas is:
        (𝑎𝑛𝑛𝑢𝑎𝑙 𝑔𝑎𝑠 𝑐𝑜𝑠𝑡) = (𝑐𝑜𝑠𝑡 𝑜𝑓 1 𝑙𝑖𝑡𝑟𝑒 𝑜𝑓 𝑔𝑎𝑠) × (𝑘𝑚 𝑑𝑟𝑖𝑣𝑒𝑛 𝑝𝑒𝑟 𝑦𝑒𝑎𝑟) / (𝑔𝑎𝑠 𝑐𝑎𝑟 𝑚𝑖𝑙𝑒𝑎𝑔𝑒)
        The amount spent on electricity is:
        (𝑎𝑛𝑛𝑢𝑎𝑙𝑒𝑙𝑒𝑐𝑡𝑟𝑖𝑐𝑖𝑡𝑦𝑐𝑜𝑠𝑡)=(𝑐𝑜𝑠𝑡𝑜𝑓1𝑘𝑊𝐻𝑜𝑓𝑒𝑙𝑒𝑐𝑡𝑟𝑖𝑐𝑖𝑡𝑦)× (𝑘𝑚𝑑𝑟𝑖𝑣𝑒𝑛𝑝𝑒𝑟𝑦𝑒𝑎𝑟) / (𝑒𝑙𝑒𝑐𝑡𝑟𝑖𝑐 𝑐𝑎𝑟 𝑚𝑖𝑙𝑒𝑎𝑔𝑒)
        */

        // The amount spent on gas is:
        const annualGasCost = gasPricePerLNum * (annualDistanceNum / gasMileageNum);

        // The amount spent on gas is:
        const annualElectricityCost = utilitiesCostNum * (annualDistanceNum / evMileageNum);

        //  Estimated electric car savings:
        const eVSavings = Math.abs(annualGasCost - annualElectricityCost);
    
        // Output results to console
        console.log('Gas car distance per litre:', gasCarDistancePerL, 'km');
        console.log('Electric car distance for cost of 1 litre of gas:', electricCarDistancePerLofGasCost.toFixed(2), 'km');
        console.log('Additional distance with electric car:', additionalDistance.toFixed(2), 'km');
        console.log(`annualGasCost: ${annualGasCost.toFixed(2)}`)
        console.log(`annualElectricityCost: ${annualElectricityCost.toFixed(2)}`)
        console.log('Estimated savings per year:', eVSavings.toFixed(2));
        console.log('Estimated savings per year:', Math.round(eVSavings));

        // Update state with calculated results
        setEVDistTravel(electricCarDistancePerLofGasCost);
        setDistDifference(additionalDistance);
        setSavings(eVSavings);

    };

    return (
        <View>
            <Text style={styles.result_title}> For the price of 1 litre of gas, you can travel: </Text>

            <View style={styles.horizontalContainer}>
            <View style={[styles.card, {backgroundColor: 'pink'}]}>
                <Icon name="gas-pump" size={28} color= 'black' />
                <Text style={styles.card_title}>{gasVehicleDistTravel.toFixed(1)}</Text>
                <Text>Km</Text>
            </View>

            <View style={[styles.card, {backgroundColor: 'skyblue'}]}>
                <Icon name="plug" size={28} color= 'black' />
                <Text style={styles.card_title}>{evDistTravel.toFixed(1)}</Text>
                <Text>Km</Text>
            </View>
            
            <View style={[styles.card, {backgroundColor: 'orange'}]}>
                <Icon name="arrow-circle-right" size={28} color= 'black' />
                <Text style={styles.card_title}>{distDifference.toFixed(1)}</Text>
                <Text>Km more</Text>
            </View>
            
            </View>

            <Text style={styles.result_title}> By switching to electric, you obtain: </Text>

            <View style={styles.biggerCard}>
                <Text style={styles.biggerCardTitle}>${Math.round(savings)}</Text>
                <Text style={styles.biggerCardSubTitle}>in savings per year</Text>
            </View>

            
        </View>
    )
}

export default ResultsSummary;

const styles = StyleSheet.create({
    result_title: {
        fontSize: 17,
    },

    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '100%',
        marginVertical: 5,
    }, 

    card: {
        width: '30%',
        borderRadius: 8,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    biggerCard: {
        fontSize: 20,
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    biggerCardTitle: {
        fontSize: 35,
        color: '#fff',
    },
    biggerCardSubTitle: {
        fontSize: 20,
        color: '#fff',
    }
})