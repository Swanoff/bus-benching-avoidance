import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const gotoBusA = () => Actions.Track({busName: '96A'});
        const gotoBusB = () => Actions.Track({busName: '96B'});
        return (
            <View style={results.layout}>
                <Text style={results.title}>2 buses found</Text>

                <TouchableNativeFeedback onPress={gotoBusA}>
                    <View>
                        <Text>96-A</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={gotoBusB}>
                    <View>
                        <Text>96-B</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const results = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    }
})