import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

const DetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Grabbing the item we clicked on from the ListScreen
  const { item } = route.params || {};

  if (!item || !item.id) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No item selected</Text>
      </View>
    );
  }

  // Update Firestore to mark task as completed
  const markCompleted = async () => {
    try {
      const itemRef = doc(db, 'items', item.id);
      await updateDoc(itemRef, { isCompleted: true });
      Alert.alert('Marked as completed');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Could not mark as complete');
    }
  };

  // Delete item from Firestore
  const deleteItem = async () => {
    try {
      const itemRef = doc(db, 'items', item.id);
      await deleteDoc(itemRef);
      Alert.alert('Deleted');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Something went wrong trying to delete this');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>

      {/* ✅ Optional Description */}
      {item.description ? (
        <Text style={styles.description}>{item.description}</Text>
      ) : null}

      <Text style={styles.status}>
        Status: {item.isCompleted ? 'Already done ✅' : 'Not done yet 🚧'}
      </Text>

      {/* ✅ Mark as completed button */}
      {!item.isCompleted && (
        <TouchableOpacity onPress={markCompleted} style={styles.completeBtn}>
          <Text style={styles.completeText}>Mark as Completed</Text>
        </TouchableOpacity>
      )}

      {/* ✅ Delete item button */}
      <TouchableOpacity onPress={deleteItem} style={styles.deleteBtn}>
        <Text style={styles.deleteText}>Delete Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#444',
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  completeBtn: {
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 8,
    marginBottom: 15,
  },
  completeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  deleteBtn: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  deleteText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default DetailsScreen;