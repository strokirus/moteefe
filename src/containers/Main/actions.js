import C from './constants';

/**
 * Request to Networks Request and store
 */
export const fetchProducts = () => ({
  type: C.FETCH_PRODUCTS_REQUEST,
});

export const addCart = id => ({
  type: C.CART_REQUEST,
  params: { id },
});

export const addWishlist = id => ({
  type: C.WISHLIST_REQUEST,
  params: { id },
});
