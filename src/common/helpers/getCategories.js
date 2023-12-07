import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';


export const getCategories = async () => {
    const collectionRef  = collection( FirebaseDB, `/categories` );
    const docs = await getDocs(collectionRef);

    const categories = [];
    docs.forEach( doc => {
      categories.push({ id: doc.id, ...doc.data() });
    });

    return categories
}