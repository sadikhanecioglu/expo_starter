import {
  Products,
  BestSellerProducts,
  Categories,
} from "../demoContent/discountedProducts";

const PRODUCT_LIST_LOADING = "PRODUCT_LIST_LOADING";
const PRODUCT_LIST_LOADED = "PRODUCT_LIST_LOADED";

const initialState = {
  isLoading: false,
  products: [],
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_LOADED:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_LOADING,
      });
      dispatch({
        type: PRODUCT_LIST_LOADED,
        payload: Products,
      });
    //   setTimeout(() => {

    //   }, 1000)

  };
};


