import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';

function CreateUser(navigation) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [document, setDocument] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [cellPhone, setCellPhone] = useState("");

    const createUsers = async () => {

        try {
            const response = await fetch('http://192.168.0.18:8080/add', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    lastName: lastName,
                    document: document,
                    birthdate: birthdate,
                    city: city,
                    neighborhood: neighborhood,
                    cellPhone: cellPhone
                })
            });

            const json = await response.json();
            Alert.alert("User Created");
            navigation.goBack();

        } catch (error) {
            Alert.alert(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={text => setName(text)} placeholder="Name"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setLastName(text)} placeholder="Last Name"></TextInput>
            <TextInput keyboardType={"number-pad"} style={styles.textInput} onChangeText={text => setDocument(text)} placeholder="Document"></TextInput>
            <TextInput dataDetectorTypes={"calendarEvent"} style={styles.textInput} onChangeText={text => setBirthdate(text)} placeholder="Birthdate"></TextInput>
            <TextInput textContentType={"addressCity"} style={styles.textInput} onChangeText={text => setCity(text)} placeholder="City"></TextInput>
            <TextInput textContentType={"countryName"} style={styles.textInput} onChangeText={text => setNeighborhood(text)} placeholder="Neighborhood"></TextInput>
            <TextInput textContentType={"telephoneNumber"} keyboardType={"number-pad"} maxLength={10} style={styles.textInput} onChangeText={text => setCellPhone(text)} placeholder="Cell Phone"></TextInput>
            <TouchableOpacity style={styles.createButton} onPress={createUsers}>
                <Text style={styles.textCreateButton}>Create User</Text>
            </TouchableOpacity>
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
    textInput: {
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        marginTop: 10
    },
    createButton: {
        backgroundColor: '#26a69a',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    textCreateButton: {
        color: 'white',
    }
});
export default CreateUser;
