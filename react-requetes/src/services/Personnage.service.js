import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { getDb } from "./firebase";

const collection_name = "test"
export const findAll = async () => { 
    const doc_refs = await getDocs(collection(getDb(), collection_name))
    const response =[]
    doc_refs.forEach(personnage => {
        response.push({
        })
    })
    return response
}

export const Create = async  (personnage) => { 
   const result = await addDoc(collection(getDb(), collection_name),{id: "2", name: "toto"} )
   console.log('resultat: ', result);
} 
export const Show = async (personnage) => {
const show = await getDocs(collection(getDb(), collection_name))
console.log('resultat: ', show)
}