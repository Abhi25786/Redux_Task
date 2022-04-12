//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';




// create a component
const Home = () => {
    const data = useSelector(state => state.num)


    const onIncrement = () => {
        actions.increment(data)
    }



    const onDcrement = () => {
        actions.decrement(data)
    }

    return (
        <View style={styles.container}>
            <Button
                title='Increment'
                onPress={onIncrement}
            />
            <Text>{data}</Text>
            <Button
                title='Dcrement'
                onPress={onDcrement}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default Home;
