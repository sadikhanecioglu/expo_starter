import axios from 'axios';
import {
    Products,
    BestSellerProducts,
    Categories,
  } from "../demoContent/discountedProducts";

const PRODUCT_DETAIL_LOADING = "PRODUCT_DETAIL_LOADING";
const PRODUCT_DETAIL_LOADED = "PRODUCT_DETAIL_LOADED";

const initialState = {
  isLoading: true,
  product: {},
};

export const productReducer = (state = initialState, action) => {

  //console.log(action);

  switch (action.type) {
    case PRODUCT_DETAIL_LOADING:
      return {
          ...state,
          isLoading:true,
          
      }
    case PRODUCT_DETAIL_LOADED:
      return {
          ...state,
          isLoading:false,
          product:action.payload
          
      }
    default:
      return state;
  }
};


export const getProduct = (key) => {

        return (dispatch) => {

          const product =Products.filter(e => e.id == key)[0]
         // console.log(product);

            dispatch({
                type:PRODUCT_DETAIL_LOADED,
                payload:product
            })
             
        }

}