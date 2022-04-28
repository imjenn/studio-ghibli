import './Snackbar.css';
import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import SnackbarContext from '../../context/snackbar-context';

const Snackbar = () => {
    const snackbarCtx = useContext(SnackbarContext)

    // const x = document.getElementById("snackbar");
    // x.className = "show";
    // setTimeout(() => {
    //     x.className = x.className.replace("show", "")
    // }, 3000);


    return ReactDOM.createPortal(
        <div id="snackbar">
            <p>Added to cart</p>
            <div className="snackbar__dismiss" onClick={snackbarCtx.onClose}>
                &times;
            </div>
        </div>,
        document.getElementById('snackbar-root')
    )
}

export default Snackbar;