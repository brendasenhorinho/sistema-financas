import Cards from '../cards'
import './Resume.css'

const Resume = ({income, expense, total}) => {
    return (
        <div className="cards-box">
            <Cards nome="Entradas" sigla="./img/arrow-up-square.svg" valor={income}/>
            <Cards nome="Saídas" sigla="./img/Vector.svg" valor={expense}/>
            <Cards nome="Total" sigla="./img/currency-dollar 3.svg" valor={total}/>
        </div>
    )
}

export default Resume