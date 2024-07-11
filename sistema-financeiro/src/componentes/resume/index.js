import Cards from '../cards'
import './Resume.css'

const Resume = () => {
    return (
        <div className="cards-box">
            <Cards nome="Entradas" sigla="./img/arrow-up-square.svg" valor="R$4000.00"/>
            <Cards nome="Saídas" sigla="./img/Vector.svg" valor="R$2900.00"/>
            <Cards nome="Total" sigla="./img/currency-dollar 3.svg" valor="R$1100.00"/>
        </div>
    )
}

export default Resume