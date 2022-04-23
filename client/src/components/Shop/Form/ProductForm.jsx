import { useState, useRef } from 'react';

const ProductForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setValidAmount] = useState(true)

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmountNum = 1;
        // const enteredAmountNum = +enteredAmount; // convert string to num

        // if (enteredAmount.trim().length === 0 || enteredAmount < 1) {
        //     return;
        // }
        // console.log(enteredAmount);
        props.onAddToCart(enteredAmountNum)
    }

    return (
        <form style={{width: "100px"}} onSubmit={submitHandler}>
            {/* <input 
                type="number"
                placeholder="Quantity"
                defaultValue="1"
                step="1"
                ref={amountInputRef}
            /> */}
            <button>Add to Cart</button>
        </form>
    )
}

export default ProductForm;