import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    // Adding a item
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        // Find indexd of an existing item
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        // If item already exists, set the item to that item
        const existingItem = state.items[existingItemIndex];
        let updatedItems;

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updatedItems = [...state.items]
            console.log(updatedItems)
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    // Removing an item
    if (action.type === 'REMOVE_ITEM') {
        // Find index 
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount = existingItem.price

        let updatedItems = []
        if (existingItem.amount === 1) {
            const updatedItem = state.items.filter((item) => item.id !== action.id);
            console.log(updatedItem);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            console.log(updatedItem);
            updatedItems = [...state.items];
            console.log(updatedItems)
            updatedItems[existingItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    // Clear cart
    if (action.type === 'REMOVE_ALL') {
        return defaultCartState;
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        console.log(item);
        dispatchCart({ type: 'ADD_ITEM', item: item })
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCart({ type: 'REMOVE_ITEM', id: id })
    }

    const clearCartHandler = (items) => {
        dispatchCart({ type: 'REMOVE_ALL', items: items })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;