import { FETCH_PRODUCTS } from "../actions/ProductsAction";


const initialState = {
    products : [
    //   {
    //       title : "askjals",
    //       price : 213,
    //       description : "sadkjskdjlk"
    //   }
    ]
}

export default function ProductsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log("reducer getting the data", action.payload);
            return {
                ...state,
                products : action.payload
            }
    
        default:
            return state
            
    }
}
