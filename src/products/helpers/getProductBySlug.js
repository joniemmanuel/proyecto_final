import { FirebaseDB } from "../../firebase/config";
import { getDocs, collection, query, where } from "firebase/firestore/lite";


export const getProductBySlug = async (slug) => {

    const collectionRef = collection(FirebaseDB, 'products');
    const productQuery  = query(collectionRef, where("slug","==",slug));
    const docProduct = await getDocs(productQuery);

    let product = {};

    docProduct.forEach( (p) => {
        product = {id: p.id,...p.data()}
    })

    return product
}
