import './Header.css'

const Header = (props) => {
    return (
        <div className="header-main">
            <div className="header-titulo">
                <img src="./img/logoSCF.svg"/>
                <h1>SISTEMA FINANCEIRO</h1>
            </div>
            <div className="header-a">
                <a href="#"> 
                    <img src={props.icon1}/>  
                    {props.ancora1}
                </a>
                <a href="#"> 
                    <img src={props.icon2}/>  
                    {props.ancora2}
                </a>
                <a href="#"> 
                    <img src={props.icon3}/>  
                    {props.ancora3}
                </a>
            </div>
        </div>
    )
}

export default Header