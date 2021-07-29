import { productConstants } from "../actions/constants";


const initialState = {
    products: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
       /*  case productConstants.ADD_NEW_PRODUCT_FAILURE:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.product,
                loading: false
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_FAILURE:
            state = {
                ...initialState
            }
            break; */
    }

    return state;
}