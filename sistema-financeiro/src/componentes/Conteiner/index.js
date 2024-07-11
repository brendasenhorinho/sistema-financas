import Header from '../header'
import Titulo from '../titulo'
import './Conteiner.css'

const Conteiner = () => {
    return (
        <div className="conteiner">
            <Header 
                ancora1="PERFIL" icon1="./img/person-fill.svg" 
                ancora2="CONTA" icon2="./img/currency-dollar.svg" 
                ancora3="GRAFÍCO" icon3="./img/graph-up-arrow.svg"
            />
            <Titulo titulo="Controle Financeiro"/>
        </div>
    )
}

export default Conteiner