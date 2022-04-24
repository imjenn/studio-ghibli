import { useContext } from "react";
import CartContext from '../../context/cart-context';
import ModalOverlay from '../Modal/Modal'
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
                    <div>
                        <img src={item.image} alt="" />
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
        </ModalOverlay>
    )
}

export default Cart;