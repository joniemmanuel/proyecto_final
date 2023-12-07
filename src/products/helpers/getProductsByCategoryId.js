import { FirebaseDB } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const getProductsByCategoryId = async (id) => {

    const collectionRef = collection(FirebaseDB, 'products');
    const categoryQuery  = query(collectionRef, where("categoryId","==",id));
    const docs = await getDocs(categoryQuery)

    const products = [];

    docs.forEach( doc => {
        products.push({ id: doc.id, ...doc.data() });
    });
    
    return products;

}
