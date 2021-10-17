import { createContext } from 'react';

/*
    Definim contextul
*/
const CartContext = createContext({
    items: [],
    cartTotalCashAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {}
});

export default CartContext;