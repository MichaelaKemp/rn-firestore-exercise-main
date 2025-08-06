//All of our Firestore functionality
import { collection, addDoc, getDocs, query, orderBy, where } from "firebase/firestore"; 
import { db } from "../firebase.js"; 

//TODO: Create new list item function

export const createNewBucketItem = async (item) => {
    try {
        //DocRef - our reference to our newly created document - brand new with a self-generated ID
        const docRef = await addDoc(collection(db, "items"), item);
        return true  //be a bit more specific on why it was successful/fails
    } catch (e) {
        return false
    }
}


//TODO: Get all list items function
export const getMyBucketList = async () => {
    //getDocs - get all documents from our collection (optional where that you can add)

    var allItems = []; //array that we want to return

    //making a custom query to add order by or limit to our querying of data
var q = query(collection(db, "items"), orderBy('priority', "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());

        allItems.push({...doc.data(), id: doc.id}); //push each docs data into the array I want to return

    });

    //console.log(allItems);
    return allItems;

    //can't use querySnapshot as the array of items - need to access .data() for each document
}