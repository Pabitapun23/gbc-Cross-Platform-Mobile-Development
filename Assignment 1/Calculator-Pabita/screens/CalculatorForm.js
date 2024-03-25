import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import ResultsSummary from "./ResultsSummary";
import AnnualDistanceButtons from "./AnnualDistanceButtons";

const CalculatorForm = () => {

    const [gasPricePerL, setGasPricePerL] = useState('')
    const [gasMileage, setGasMileage] = useState('')
    const [utilitiesCost, setUtilitiesCost] = useState('')
    const [evMileage, setEVMileage] = useState('')
    const [annualDistance, setAnnualDistance] = useState(15000);
    const [metrics, setmetrics] = useState('')
    
    return (
        <View style={styles.Container}>
            <Text>Gas Vehicle Information</Text>
            <View style={styles.horizontalContainer}>
            <TextInput 
                placeholder="Price per litre ($/L)" 
                keyboardType="numeric"
                value={gasPricePerL}
                onChangeText={value => setGasPricePerL(value)} 
                style={styles.textInput}
                />

            <TextInput 
                placeholder="Gas mileage (Km/L)" 
                keyboardType="numeric"
                value={gasMileage}
                onChangeText={value => setGasMileage(value)}
                style={styles.textInput}
              />
            </View>

            <Text>Electric Vehicle Information</Text>
            <View style={styles.horizontalContainer}>
            <TextInput 
                placeholder="Utilities cost ($/kwH)" 
                keyboardType="numeric"
                value={utilitiesCost}
                onChangeText={value => setUtilitiesCost(value)}
                style={styles.textInput}
              />

            <TextInput 
                placeholder="EV mileage (Km/kwH)" 
                keyboardType="numeric"
                value={evMileage}
                onChangeText={value => setEVMileage(value)}
                style={styles.textInput}
                />
            </View>

            <Text>How many km do you drive each year?</Text>
            <AnnualDistanceButtons onDistanceChange={setAnnualDistance}/>

            <TouchableOpacity style={styles.buttonBg} onPress={() => {
                setmetrics({
                    'gasPricePerL': gasPricePerL,
                    'utilitiesCost': utilitiesCost,
                    'evMileage': evMileage,
                    'annualDistance': annualDistance
                })
            }}>
                <Text style={styles.buttonText}>Estimate Savings</Text>
            </TouchableOpacity>
            
            <ResultsSummary 
            metrics = {metrics}
            gasMileage={gasMileage}
            />
        </View>
    )
}

export default CalculatorForm;

const styles = StyleSheet.create({
    Container: {
        marginTop: 5,
        width: '100%'
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        paddingTop: 0,
        width: '100%'
    }, 
    textInput: {
        width: '50%',
        borderRadius: 5,
        backgroundColor: '#E5E4E2',
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        fontWeight: 'bold'
    },
    buttonBg: {
        fontSize: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})