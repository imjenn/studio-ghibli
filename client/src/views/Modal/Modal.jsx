import ReactDOM from 'react-dom';
import './styles';

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose} />
}

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            {props.children}
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default Modal;