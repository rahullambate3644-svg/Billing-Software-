// firebase-sync.js
import { db } from './firebase-config.js';
import { 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where, 
    doc, 
    updateDoc, 
    deleteDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

/**
 * Save data to a specific Firebase collection
 * @param {string} collName - 'PURCHASE_MASTER' or 'allSales'
 * @param {object} data - The bill or sale object
 */
export async function saveData(collName, data) {
    try {
        const docRef = await addDoc(collection(db, collName), {
            ...data,
            timestamp: new Date().toISOString() // Added for better reporting
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

/**
 * Fetch all data from a collection
 * @param {string} collName - 'PURCHASE_MASTER' or 'allSales'
 */
export async function fetchData(collName) {
    const querySnapshot = await getDocs(collection(db, collName));
    let dataArr = [];
    querySnapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data() });
    });
    return dataArr;
}

/**
 * Delete a document from Firebase
 */
export async function deleteData(collName, docId) {
    await deleteDoc(doc(db, collName, docId));
}
