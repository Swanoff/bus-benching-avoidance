import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import firebase, { database } from 'firebase';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({
            selectedIndex
        })
    }

    render() {
        const gotoBusA = () => Actions.Track({busName: '96A'});
        const gotoBusB = () => Actions.Track({busName: '96B'});

        const buttons = ['Distance', 'Free Seats'];
        const {selectedIndex} = this.state;

        return (
            <View style={results.layout}>
                <Text style={results.title}>2 buses found</Text>

                <View>
                    <Text style={results.sortText}>Sort by: </Text>
                    <View>
                        <ButtonGroup 
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{height: 100}}
                        />
                    </View>
                </View>

                {
                    (this.state.selectedIndex==0)
                    ?
                    (
                    <View>
                        <View>
                            <TouchableNativeFeedback onPress={gotoBusA}>
                                <View style={results.bus}>
                                    <Text style={results.busName}>96A</Text>
                                    <Text style={results.route}>Gandhipuram - Ettimadai</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View>
                            <TouchableNativeFeedback onPress={gotoBusB}>
                                <View style={results.bus}>
                                    <Text style={results.busName}>96B</Text>
                                    <Text style={results.route}>Gandhipuram - Ettimadai</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    )
                    :
                    (
                    <View> 
                        <View>
                            <TouchableNativeFeedback onPress={gotoBusB}>
                                <View style={results.bus}>
                                    <Text style={results.busName}>96B</Text>
                                    <Text style={results.route}>Gandhipuram - Ettimadai</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View>
                            <TouchableNativeFeedback onPress={gotoBusA}>
                                <View style={results.bus}>
                                    <Text style={results.busName}>96A</Text>
                                    <Text style={results.route}>Gandhipuram - Ettimadai</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    )
                }
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
    },
    bus: {
        marginTop: 30,
        padding: 10
    },
    busName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    route: {
        fontWeight: '200',
        fontSize: 15
    },
    sortBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sortText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }
})