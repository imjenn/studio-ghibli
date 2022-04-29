import './Checkout.css';
import Card from '../../../views/Card/Card'
import { useContext } from 'react';
import CartContext from '../../../context/cart-context';

const Checkout = () => {
    const cartCtx = useContext(CartContext);
    const subtotal = cartCtx.totalAmount.toFixed(2)

    const cartItems = (
        <div>
            {cartCtx.items ? cartCtx.items.map((item) => {
                return (
                    <div className="bag-items">
                        <img src={item.image} alt="" />
                        <p>{item.price}</p>
                    </div>
                )
            }) : null}
        </div>
    )

    return (
        <div className="checkout">
            <form className="checkout-form">
                <h1>CHECKOUT</h1>
                <div>
                    <label>Email: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Address </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Apt/Unit/Building: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>State: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Zip: </label>
                    <input type="text" />
                </div>
                <input type="submit" value="Continue to Payment" />
            </form>
            <div className="bag">
                <h2>Your Items</h2>
                {cartItems}
                <p>Subtotal: {subtotal}</p>
                <p>Shipping: TBD</p>
                <p>Tax: TBD</p>
                <p>Total: {subtotal}</p>
            </div>
        </div>
    )
}

export default Checkout;