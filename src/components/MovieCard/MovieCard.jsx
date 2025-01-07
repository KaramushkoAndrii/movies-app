

const MovieCard = ({Poster, Title, Type, Year}) => {
    return (
        <>
            <li className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img src={ Poster === 'N/A' ? 'https://placehold.co/600x400' : Poster} alt={Title} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{Title}</span>
                    <p>{Year} <span className="right">{Type}</span></p>
                </div>
            </li>
        </>
    )
}

export default MovieCard;



            {/* <div classNameName="row">
                <div classNameName="col s12 m7">
                    <div classNameName="card">
                        <div classNameName="card-image">
                            <img src={img} />
                            <span classNameName="card-title">{cardTitle}</span>
                        </div>
                        <div classNameName="card-content">
                            <p>{type}</p>
                        </div>
                        <div classNameName="card-action">
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </div> */}