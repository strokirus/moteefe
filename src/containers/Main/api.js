import products from '../../../public/products.json';

/**
 * Request to our service based in cep passed by user what information is
 * related of there cep
 * @param query Number of Cep formatted in formatCep rule (utils file)
 * @return {Object} Information related by our api
 */
export const requestProducts = () => (
  products
);

export default {
  requestProducts,
};
