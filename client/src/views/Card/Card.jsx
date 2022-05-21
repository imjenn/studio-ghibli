import './styles';

const Card = (props) => {
    return (
        <div className="props-card">
            {props.children}
        </div>
    )
}

export default Card;