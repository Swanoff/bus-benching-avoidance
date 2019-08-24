import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AirbnbRating, Input, Button} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class Rate extends Component {
    render() {
        return (
            <View style={rate.layout}>
                <View style={rate.box}>
                    <Text style={rate.topic}>Bus Condition</Text>
                    <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
                    defaultRating={0}
                    size={20}
                    />
                </View>
                <View style={rate.box}>
                    <Text style={rate.topic}>Staff Behaviour</Text>
                    <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
                    defaultRating={0}
                    size={20}
                    />
                </View>
                <View style={rate.box}>
                    <Text style={rate.topic}>Queries (if any)</Text>
                    <Input />
                </View>
                <Button
                    title="Submit"
                    onPress={() => Actions.Home()}
                />
            </View>
        )
    }
}

const rate = StyleSheet.create({
    topic: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    box: {
        marginBottom: 50
    },
    layout: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
})