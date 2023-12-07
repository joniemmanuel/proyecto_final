import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore/lite';

import { FirebaseDB } from '../../firebase/config';


export const useNavbar = () => {
    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
      const collectionRef  = collection( FirebaseDB, `/categories` );
      const docs = await getDocs(collectionRef);


      const categories = [];
      docs.forEach( doc => {
        categories.push({ id: doc.id, ...doc.data() });
      });

      setCategories(categories);
    }

    useEffect(()=>{
      getAllCategories();
    },[])
    
    return {
      categories
    }
}
