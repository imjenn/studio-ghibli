import { useContext } from "react";
import CartContext from "../../../context/cart-context";

// import { useContext } from 'react';
// import CartContext from '../../../context/cart-context'

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            image: props.image,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <div>
            <img src={props.image} alt=""/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.amount}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default ProductItem;