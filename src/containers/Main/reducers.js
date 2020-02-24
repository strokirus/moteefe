import C from './constants';

const initialState = {
  show: false,
  products: {
    isFetching: true,
    items: [],
  },
  cart: {
    items: [],
  },
  wishlist: {
    items: [],
  },
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        show: false,
        products: initialState.products,
      };

    case C.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        show: true,
        products: {
          isFetching: false,
          items: action.data,
        },
      };

    case C.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        show: false,
        products: initialState.products,
      };

    default:
      return state || initialState;
  }
};

export default mainReducer;
