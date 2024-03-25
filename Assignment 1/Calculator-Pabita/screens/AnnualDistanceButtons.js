import { useState } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const AnnualDistanceButtons = (props) => {
  const [annualDistance, setAnnualDistance] = useState(15000);

  const handleDistanceChange = (value) => {
    const distance = parseFloat(value);
    setAnnualDistance(distance);
    // Call the function passed from parent with the selected value
    props.onDistanceChange(distance); 
  };

  return (
    <SafeAreaView style={styles.segmentedButtons}>
      <SegmentedButtons
        value={annualDistance}
        // Call handleDistanceChange instead of setAnnualDistance directly
        onValueChange={handleDistanceChange} 
        buttons={[
          {
            value: 15000,
            label: '15000',
          },
          {
            value: 25000,
            label: '25000',
          },
          { 
            value: 40000,
            label: '40000' 
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default AnnualDistanceButtons;

const styles = StyleSheet.create({
  segmentedButtons: {
    width: '100%',
    padding: 10,
    marginTop: 10,
  },
});