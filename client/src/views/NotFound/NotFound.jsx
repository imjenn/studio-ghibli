/**
 * This component displays a 404 page if an invalid route was entered.
 */

import './styles';

const NotFound = () => {
    return (
        <div className="calcifer-error">
            <img src="https://i.pinimg.com/originals/16/3d/04/163d042701ab4b94a9835b854c5452cb.jpg" alt=""/>
            <h1>Sorry, we couldn't find the page you were looking for.</h1>
        </div>
    )
}

export default NotFound;