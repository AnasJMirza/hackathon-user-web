import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/firebase"

export const FETCH_PRODUCTS = "FETCH_PRODUCTS"



export const fetchProducts = (setLoader) => async (dispatch) =>{
    setLoader(true)
    try {
        
        let products = []

        const productsCollection = collection(db, "products");
        console.log(productsCollection);

        const allProducts = await getDocs(productsCollection);
        

        allProducts.docs.map((item)=>{
            products.push({...item.data(), id : item.id})
        })

        console.log("Fetch action run", products);

        dispatch({
            type : FETCH_PRODUCTS,
            payload : products
        })

        
    } catch (error) {
        console.log("ERROR = ", error);
        
    }
    finally{
        setLoader(false)
    }
}