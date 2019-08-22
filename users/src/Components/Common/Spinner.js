import React from 'react';
import {
    Text,
    View,
    ActivityIndicator
} from 'react-native';


const Spinner = ({
    size
}) => {
    return ( 
        <View style = {
            styles.spinnerStyle
        } >
        <ActivityIndicator size = {
            size || 'large'
        }
        />
        </View>
    )
}

const styles = {
    spinnerStyle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export {
    Spinner
}