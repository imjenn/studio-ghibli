import './styles';
import { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';

const CartDropdown = () => {
    const cartCtx = useContext(CartContext);
    const total = cartCtx.totalAmount;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const clearCartHandler = (items) => {
        cartCtx.clearCart(items);
    }

    const cartItems = (
        <div>
            {cartCtx.items.length > 0 ? cartCtx.items.map((item) => {
                return (
                    <div className="cart-items">
                        <img src={item.image} alt="" />
                        <div className="cart-items-amount">
                            <b onClick={cartItemRemoveHandler.bind(null, item.id)}>&#x2212;</b>
                            <p>{item.amount}</p>
                            <b onClick={cartItemAddHandler.bind(null, item)}>&#x2b;</b>
                        </div>
                        <p>{item.price}</p>
                    </div>
                )
            }) : <p>Your shopping cart is empty.</p>}
        </div>
    )

    return (
        <div className="cart-dropdown-container">
            <div>
                {cartItems}   
            </div>
        </div>
    )
}

export default CartDropdown;