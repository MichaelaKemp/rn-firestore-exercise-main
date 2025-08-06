import { 
  Pressable, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  FlatList 
} from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { getMyBucketList } from '../services/DbService';

const ListScreen = ({ navigation }) => {
  const [bucketItems, setBucketItems] = useState([]);

  // Navigates to the "Add" screen when the Add button is pressed
  const goToAdd = () => {
    navigation.navigate("Add");
  };

  // Use useFocusEffect instead of useEffect to re-fetch data
  // every time the screen is focused (including returning from Add or Details screens)
  useFocusEffect(
    React.useCallback(() => {
      handleGettingOfData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        //DO NOTHING
      };
    }, [])
  );

  // Async function to get all bucket list items from Firestore
  const handleGettingOfData = async () => {
    var allData = await getMyBucketList();
    setBucketItems(allData);
  };

  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Text>{item.title}</Text>
      {/* Show the star icon if the item has priority */}
      {item.priority ? <AntDesign name="star" size={24} color="orange" /> : null}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Button to navigate to Add screen */}
        <Pressable style={styles.addButton} onPress={goToAdd}>
          <Text style={styles.addButtonText}>Add</Text>
          <Entypo name="bucket" size={16} color="green" />
        </Pressable>

        {/* Display the list of items using FlatList */}
        <FlatList
          data={bucketItems}                    // Array of bucket list items
          renderItem={renderItem}             
          keyExtractor={(item, index) => item.id || index.toString()}  // Unique key
          ListEmptyComponent={
            <Text>No items yet</Text>        // Optional fallback if no items
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    gap: 5,
  },
  addButtonText: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
});