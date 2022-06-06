import toast, { Toaster } from 'react-hot-toast';
import './styles/ProductForm.css'

const notify = () => toast.success('Added to cart', {
    duration: 3000,
    position: 'bottom-right'
})

const ProductForm = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddToCart(1)
    }

    return (
        <form className="product-form-container" style={{width: "100px"}} onSubmit={submitHandler}>
            <button onClick={notify}>Add to Cart</button>
            <Toaster />
        </form>
    )
}

export default ProductForm;