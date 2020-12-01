import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import CardComponent from './card-component';
import {useIsFocused} from '@react-navigation/native';


function ListUser({ navigation }) {

    const isFocused = useIsFocused();

    const [users, setUsers] = useState([]);

    const listUsers = async () => {

        let response = await fetch('http://192.168.0.18:8080/users');
        let json = await response.json();
        console.log(json);
        setUsers(json);
    }

    useEffect(() => {
        listUsers();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Create')}>
                <Text style={styles.textCreateButton}>Create User</Text>
            </TouchableOpacity>
            <FlatList>
            data={users}
            renderItem={({ item }) =>
                    <TouchableOpacity >
                        <CardComponent user={item} />
                    </TouchableOpacity>}
            keyExtractor={item => item.id}
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    createButton: {
        backgroundColor: '#26a69a',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    textCreateButton: {
        color: 'white'
    },
    listButtonUsers: {
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        marginTop: 10
    }
});

export default ListUser;
