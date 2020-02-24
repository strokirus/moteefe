import React, { Fragment } from 'react';
import { array, bool, func } from 'prop-types';

const Products = ({ items, isFetching, onClickWishlist, onClickCart }) => (
  <Fragment>
    {(isFetching || items.length === 0) &&
      <p
        className="title-loading"
      >
        {isFetching ? 'Loading' : 'No items to show'}
      </p>
    }

    {!isFetching && items.length > 0 &&
      <Fragment>
        {items.map(p => (
          <div
            className={`item-product-${p.id}`}
          >
            <img
              src={p.imageUrl}
              title={p.name}
              alt={p.description}
            />
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <span>{p.price}</span>
            <button onClick={onClickWishlist(p.id)}>Add in Wishlist</button>
            <button onClick={onClickCart(p.id)}>Add in cart</button>
          </div>
        ))}
      </Fragment>
    }
  </Fragment>
);

Products.propTypes = {
  items: array,
  isFetching: bool,
  onClickCart: func,
  onClickWishlist: func,
};

Products.defaultProps = {
  items: [],
  isFetching: true,
  onClickCart: () => {},
  onClickWishlist: () => {},
};

export default Products;
