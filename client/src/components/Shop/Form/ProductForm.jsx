import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Added to cart', {
    duration: 3000,
    position: 'bottom-right'
})

const ProductForm = (props) => {
    // const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        // const enteredAmountNum = 1;
        props.onAddToCart(1)
    }

    return (
        <form style={{width: "100px"}} onSubmit={submitHandler}>
            <button onClick={notify}>Add to Cart</button>
            <Toaster />
        </form>
    )
}

export default ProductForm;