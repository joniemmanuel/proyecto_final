import { FirebaseDB } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const getProductsByCategoryKey = async (key) => {
   
    const categoriesRef = collection(FirebaseDB, 'categories');
    const categoryQuery  = query(categoriesRef, where("key","==",key));
    const categoryDocs = await getDocs(categoryQuery)

    let category = {};

    categoryDocs.forEach( doc => {
        category = {id: doc.id, ...doc.data()}
    })

    const productsRef = collection(FirebaseDB, 'products');
    const productsQuery = query(productsRef, where("categoryId", "==", category.id) );
    const productsDocs = await getDocs(productsQuery)

    const products = [];

    productsDocs.forEach( doc => {
        products.push({ id: doc.id, ...doc.data() });
    });
    
    return products;
}
