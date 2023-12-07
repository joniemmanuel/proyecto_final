import { useEffect, useReducer } from "react";


import { collection, getDocs} from 'firebase/firestore/lite';


import { FirebaseDB } from "../../firebase/config";
import { productReducer } from "../context/productReducer";


export const useProductProvider = (initialState) => {

    const [state, dispatch] = useReducer( productReducer , initialState );

    useEffect(()=>{
        getAllProducts();
    },[])

    const setProducts = (products) => {
        dispatch({ type: 'set-products', payload: products })
    };

    const getAllProducts = async() => {

        const collectionRef  = collection( FirebaseDB, `/products` );
        const docs = await getDocs(collectionRef);

        const products = []
        docs.forEach( doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
    
        setProducts(products)
    };

   
    return {
        ...state,
        setProducts,
    }
}