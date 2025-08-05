import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListScreen = () => {

  const navigation:any = useNavigation();

  const goToAdd = () => { navigation.navigate("Add") }

  return (
    <SafeAreaView>
        <View  style={styles.container}>

            <Pressable style={styles.addButton} onPress={goToAdd}>
                <Text style={styles.addButtonText}>Add</Text>
                <Entypo name="bucket" size={16} color="green" />
            </Pressable>


            {/* THIS WILL LOOP FOR EACH ITEM */}
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Details")}>
                <Text>Title</Text>
                <AntDesign name="star" size={24} color="orange" />
            </TouchableOpacity>
            {/* END LOOP */}
        </View>
       
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addButton: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    addButtonText: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold'
    }
})