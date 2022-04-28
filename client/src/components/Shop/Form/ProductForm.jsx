import { useState, useContext, useRef } from 'react';
import SnackbarContext from '../../../context/snackbar-context';
import Snackbar from '../../../views/Snackbar/Snackbar';

const ProductForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setValidAmount] = useState(true)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const inputRef = useRef();
    const snackbarCtx = useContext(SnackbarContext)

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmountNum = 1;
        if (showSnackbar === false) {
            setShowSnackbar(true);
        } else {
            setShowSnackbar(false);
        }
        props.onAddToCart(enteredAmountNum)
    }

    return (
        <form style={{width: "100px"}} onSubmit={submitHandler}>
            <button>Add to Cart</button>
            { 
                showSnackbar && 
                <Snackbar display={showSnackbar}    /> 
            }
        </form>
    )
}

export default ProductForm;