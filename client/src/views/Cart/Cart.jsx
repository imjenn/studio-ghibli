import { useContext } from "react";
import CartContext from '../../context/cart-context';
import ModalOverlay from '../Modal/Modal'
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const total = cartCtx.totalAmount.toFixed(2);

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
            {cartCtx.items ? cartCtx.items.map((item) => {
                return (
                    <div className="cart-items">
                        <img src={item.image} alt="" />
                        <p>{item.price}</p>
                    </div>
                )
            }) : null}
        </div>
    )

    return (
        <ModalOverlay>
            <div className="cart-header">
                <h1>Your cart:</h1>
                <button onClick={props.onHideCart}>&#x2715;</button>
            </div>
            <div>
                {cartItems}
            </div>
            <div className="total">
                <p>Total:</p>
                <p>{total}</p>
            </div>
            <Link to='/checkout' onClick={props.onHideCart}>Checkout</Link>
        </ModalOverlay>
    )
}

export default Cart;