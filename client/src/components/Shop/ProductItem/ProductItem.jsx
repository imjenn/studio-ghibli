import './styles';
import { useContext } from "react";
import CartContext from "../../../context/cart-context";
import Form from '../ProductForm/ProductForm';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            image: props.imageOne,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    const changeImage = (e, img) => {
        if (img != '') {
            console.log(e.target.src)
            e.target.src = img
        }
    }

    return (
        <div className="product-item-container">
            <img src={props.imageOne} alt={props.name} onMouseOver={(e) => changeImage(e, props.imageTwo)} onMouseOut={(e) => changeImage(e, props.imageOne)} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.amount}</p>
                <div className="add-to-cart-btn">
                    <p>${props.price}</p>
                    <Form onAddToCart={addToCartHandler} /> 
                </div>
                
            </div>
        </div>
    )
}

export default ProductItem;