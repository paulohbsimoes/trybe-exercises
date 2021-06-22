const faker = require('faker');

const randomCustomers = [...new Array(10)].map((_, index) => ({
  id: index,
  name: faker.name.findName(),
  age: Math.max(10, Math.floor(Math.random() * 100)),
  email: faker.internet.email(),
}));

export const Types = {
  ADD_CUSTOMER: 'ADD_CUSTOMER',
  REMOVE_CUSTOMER: 'REMOVE_CUSTOMER',
  SET_SORT_METHOD: 'SET_SORT_METHOD',
};

const INITIAL_STATE = {
  customers: randomCustomers,
  idCount: randomCustomers.length,
  sortMethod: 'id',
};

const customers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.ADD_CUSTOMER: {
    const newCustomer = { ...action.payload, id: state.idCount };
    return {
      ...state,
      customers: [...state.customers, newCustomer],
      idCount: state.idCount + 1,
    };
  }

  case Types.REMOVE_CUSTOMER: {
    return {
      ...state,
      customers: state.customers.filter((customer) => customer.id !== action.payload),
    };
  }

  case Types.SET_SORT_METHOD: {
    return {
      ...state,
      sortMethod: action.payload,
    };
  }

  default: return state;
  }
};

export const Creators = {
  addCustomer: (customer) => ({
    type: Types.ADD_CUSTOMER,
    payload: customer,
  }),

  removeCustomer: (id) => ({
    type: Types.REMOVE_CUSTOMER,
    payload: id,
  }),

  setSortMethod: (field) => ({
    type: Types.SET_SORT_METHOD,
    payload: field,
  }),
};

export default customers;
