import Swal from "sweetalert2";

import { addDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const newOrder = async (order) => {
  
    try {
        await addDoc(collection(FirebaseDB, "orders"), order);
        Swal.fire({
            title: "Orden completada",
            icon: "success",
            text: "Revisa el historial de ordenes"
        })
        return order

    } catch (error) {
        Swal.fire({
            title: "Error innesperado",
            icon: "error",
        })
        return false
    }
}
