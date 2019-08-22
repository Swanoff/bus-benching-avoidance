import React, { Component } from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: '',
            drop: ''
        }
    }
    render() {
        return (
            <View style={searchBus.layout}>
                <Text style={searchBus.title}>Search Bus</Text>
                <Input
                    placeholder='                     Boarding point'
                    leftIcon={{ type: 'font-awesome', name: 'sign-in' }}
                    onChangeText={(board) => this.setState({board})}
                    value={this.state.board}
                />

                <Input
                    placeholder = '                    Dropping point'
                    leftIcon={{ type: 'font-awesome', name: 'sign-out' }}
                    onChangeText={(drop) => this.setState({drop})}
                    value={this.state.drop}
                />

                {/* <Text>{this.state.board}</Text> */}
                <Button
                    icon={
                        <Icon
                        name="search"
                        size={15}
                        color="white"
                        />
                    }
                    title="   Search"
                    onPress={()=>Actions.Results()}
                />
            </View>
        )
    }
}

const searchBus = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    }
})