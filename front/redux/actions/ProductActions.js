import API from '../../axios';

const getProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    payload: products,
  };
};

export default { getProducts };
