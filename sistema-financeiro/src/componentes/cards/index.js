import './Cards.css'

const Cards = (props) => {
    return (
        <div className="cards">
            <div className="card-box">
                <h3>{props.nome}</h3>
                <img src={props.sigla}/>
            </div>
            <div className="teste">
                <p>{props.valor}</p>
            </div>
        </div>
    )
}

export default Cards 