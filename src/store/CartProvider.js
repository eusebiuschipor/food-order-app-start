import CartContext from "./cart-context";
import { useState } from 'react';

const defaultCartState = {
    items: [],
    cartTotalCashAmount: 0
};

const CartProvider = (props) => {
    const [cartState, setCartState] = useState(defaultCartState);

    const addItemToCartHandler = (item) => {
        const updatedTotalCashAmount = cartState.cartTotalCashAmount + item.amount * item.price;
        const existingCartItemIndex = cartState.items.findIndex(el => (el.id === item.id));
        const existingCartItem = cartState.items[existingCartItemIndex];
        let updatedItems = [];

        if (existingCartItem) { // update
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + item.amount
            };

            console.log(updatedItem);

            updatedItems = [...cartState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else { // add
            cartState.items.push(item);
            updatedItems = cartState.items;
        }

        updateState(updatedItems, updatedTotalCashAmount);
    }

    const removeItemToCartHandler = (id) => {
        //updateState
        const existingCartItemIndex = cartState.items.findIndex(el => (el.id === id));
        const existingCartItem = cartState.items[existingCartItemIndex];
        const updatedTotalCashAmount = cartState.cartTotalCashAmount - existingCartItem.price;
        
        if (existingCartItem.amount === 1) {
            cartState.items = cartState.items.filter((item) => item.id !== id);
        } else {
            existingCartItem.amount = existingCartItem.amount - 1;
            cartState.items[existingCartItemIndex].amount = existingCartItem.amount;
        }

        setCartState({...cartState});
    }

    const updateState = (items, cartTotalCashAmount) => {
        const newContext = Object.create(cartState);
        newContext.items = items;
        newContext.cartTotalCashAmount = cartTotalCashAmount;
        setCartState(newContext);
    }
    
    const cartContext = {
        items: cartState.items,
        cartTotalCashAmount: cartState.cartTotalCashAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;