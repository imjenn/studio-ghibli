import './styles';
import { useContext } from "react";
import CartContext from "../../../context/cart-context";
import Card from '../../../views/Card/Card';
import Form from '../Form/ProductForm';

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
        <div className="product-item-container">
            <img src={props.image} alt=""/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.amount}</p>
                <p>${props.price}</p>
                <Form onAddToCart={addToCartHandler} />
            </div>
        </div>
    )
}

export default ProductItem;