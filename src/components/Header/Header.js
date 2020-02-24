import React from 'react';
import { number, func } from 'prop-types';

const Header = ({ showWishlist, showCart, itemsWishlist }) => (
  <p
    className="title-loading"
  >
    {itemsWishlist}
    <div onClick={showWishlist}>Wishlist</div>
    <div onClick={showCart}>Cart</div>
  </p>
);

Header.propTypes = {
  itemsWishlist: number,
  showWishlist: func,
  showCart: func,
};

Header.defaultProps = {
  itemsWishlist: 0,
  showCart: () => {},
  showWishlist: () => {},
};

export default Header;
