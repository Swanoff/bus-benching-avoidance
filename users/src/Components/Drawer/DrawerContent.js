import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class DrawerContent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: 'black', height: 70}}>
                    <Text style={styles.hello}>Hello.</Text>
                </View>
                <View>
                    <TouchableNativeFeedback onPress={()=>Actions.Home()}>
                        <View>
                            <Text style={styles.option}>Search bus</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <View style={styles.divider}></View>

                    <TouchableNativeFeedback onPress={()=>Actions.ScanQR()}>
                        <View>
                            <Text style={styles.option}>Scan QR</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View>
                            <Text style={styles.option}>Sign In</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    hello: {
        fontStyle: 'italic',
        fontSize: 25,
        color: 'white',
        padding: 20
    },
    divider: {
        backgroundColor: 'grey',
        height: 1
    },
    option: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 35,
        paddingTop: 20,
        paddingBottom: 20
    }
});

export default DrawerContent;