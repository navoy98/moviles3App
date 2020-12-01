import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function CardComponent(props) {

    const {name, lastName, document} = props.user;

    return (
        <View>
            <Text>{name}</Text>
            <Text>{lastName}</Text>
            <Text>{document}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
                container: {
                flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    createButton: {
                backgroundColor: '#26a69a',
        padding: 15,
        alignItems: 'center'
    },
    textCreateButton: {
                color: 'white',
    }
});

export default CardComponent;