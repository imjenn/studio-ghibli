import './Characters.css';

const Characters = (props) => {
    return (
        <>
            <div className="character-card-wrapper">
                {
                    props.data.length > 1 ?
                    props.data.map((data, index) => {
                        return (
                            <div className="character-container">
                                <h2>{data.data.name}</h2>
                                <p><b>Gender:</b> {data.data.gender}</p>
                                <p><b>Age:</b> {data.data.age}</p>
                                <p><b>Hair color:</b> {data.data.hair_color}</p>
                                <p><b>Eye color:</b> {data.data.eye_color}</p>
                            </div>
                        )
                    }) : <b>No characters to display</b>
                }
            </div>
        </>
    )
}

export default Characters;