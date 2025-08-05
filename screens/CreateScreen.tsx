import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';

const CreateScreen = () => {
    const navigation:any = useNavigation();

    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState(false)
    const [due, setDue] = useState('')
    const [description, setDescription] = useState('')

  return (
    <SafeAreaView >
        <View style={styles.container}>

            <TextInput
                style={styles.inputField}
                placeholder="Bucket List Title"
                onChangeText={newText => setTitle(newText)}
                defaultValue={title}
            />

            <TextInput
                style={styles.inputField}
                placeholder="When do you want it done?"
                onChangeText={newText => setDue(newText)}
                defaultValue={due}
            />      

            <TextInput
                multiline
                numberOfLines={4}
                style={styles.inputField}
                placeholder="Description of bucket list"
                onChangeText={newText => setDescription(newText)}
                defaultValue={description}  
            />

            <View style={styles.switch}>
                <Switch
                    trackColor={{false: 'black', true: 'green'}}
                    thumbColor={priority ? 'yellow' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(toggle) => setPriority(toggle)}
                    value={priority}
                />
                <Text>Priority?</Text>
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Create Bucket List Item</Text>
            </TouchableOpacity>
        
        </View>  
    </SafeAreaView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputField: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 15,
        padding: 10
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    switch: {
        marginTop: 15,
        display: 'flex',    
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 10,
    }
})