import React, { useState } from "react";
import './Formulario.css'


const Formulario = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [tipo, setTipo] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo");
            return;
        }
        // Lógica para salvar os dados aqui
        console.log({ desc, amount, tipo, isExpense });
    }

    return (
        <div className="formulario">
            <form className="form-box" onSubmit={(e) => e.preventDefault()}>
                <div className="form-lab-in">
                    <label>Descrição</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="form-lab-in">
                    <label>Valor</label>
                    
                    <input value={amount} onChange={(e) => setAmount(e.target.value) }></input>
                </div>
                <div className="form-lab-in">
                    <label>Tipo</label>
                    <input value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </div>
                <div className="form-in-lab">
                    <label htmlFor="type"></label>
                    <select id="type" value={isExpense ? "Entrada" : "Saída"} onChange={(e) => setExpense(e.target.value === 'Entrada')}>
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                    </select>
                </div>
                <div>
                    <button type="button" onClick={handleSave}>ADICIONAR</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;
