import { FirebaseDB } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";


export const getProductById = async (id) => {
    const docRef = doc( FirebaseDB, `products`, id );
    const docProduct = await getDoc(docRef);
    const product = {id: docProduct.id, ...docProduct.data()};
    return product
}
