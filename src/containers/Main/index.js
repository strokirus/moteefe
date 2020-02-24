import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';

import {
  fetchProducts,
  addCart,
  addWishlist,
} from './actions';

class Main extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    this.props.fetchProducts();
  }

  onClickCart = (id) => {
    this.props.addCart(id);
  }

  onClickWishlist = (id) => {
    this.props.addWishlist(id);
  }

  render() {
    const { main } = this.props;

    // eslint-disable-next-line no-return-assign
    return (
      <Fragment>
        {main && main.products.length === 0 &&
          <Loading />
        }

        <Header
          showWishlist={() => {}}
          showCart={() => {}}
          itemsWishlist={0}
        />

        {main && main.products && main.products.items.length > 0 &&
          <Products
            isFetching={main.products.isFetching}
            items={main.products.items}
            onClickCart={e => this.onClickCart(e)}
            onClickWishlist={e => this.onClickWishlist(e)}
          />
        }
      </Fragment>
    );
  }
}

Main.propTypes = {
  main: object,
  fetchProducts: func.isRequired,
  addWishlist: func.isRequired,
  addCart: func.isRequired,
};

Main.defaultProps = {
  main: { },
};

function mapStateToProps(state, ownProps) {
  const { main } = state;
  return {
    ...ownProps,
    main,
  };
}

const mapDispatchToProps = {
  fetchProducts,
  addCart,
  addWishlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
