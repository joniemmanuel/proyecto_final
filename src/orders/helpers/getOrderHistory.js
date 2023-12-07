import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const getOrderHistory = async(user) => {

    const collectionRef = collection(FirebaseDB, 'orders');
    const ordersQuery  = query(collectionRef, where("userId","==",user?.uid));
    const docs = await getDocs(ordersQuery)

    const orders = [];

    docs.forEach( doc => {
        orders.push({ id: doc.id, ...doc.data() });
    });
    

    return orders;

}