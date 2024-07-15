import React, { useState } from "react";
import './Formulario.css'


const Formulario = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [tipo, setTipo] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Informe a descrição e o valor!");
        return;
      } else if (Number(amount.replace(/\./g, '').replace(',', '.')) < 1) {
        alert("O valor tem que ser positivo!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: Number(amount.replace(/\./g, '').replace(',', '.')),
        tipo: tipo,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
      setTipo("");
    };
  
    const handleAmountChange = (e) => {
      let value = e.target.value;
     
      value = value.replace(/\D/g, '');
      
      value = value.replace(/(\d)(\d{2})$/, '$1,$2');
      value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
      setAmount(value);
    };
  
    return (
      <div className="formulario">
        <form className="form-box" onSubmit={(e) => e.preventDefault()}>
          <div className="form-lab-in">
            <label>Descrição</label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className="form-lab-in">
            <label>Valor</label>
            <input value={amount} onChange={handleAmountChange} />
          </div>
          <div className="form-lab-in">
            <label>Tipo</label>
            <input value={tipo} onChange={(e) => setTipo(e.target.value)} />
          </div>
          <div className="form-in-lab">
            <label htmlFor="type"></label>
            <select id="type" value={isExpense ? "Saída" : "Entrada"} onChange={(e) => setExpense(e.target.value === 'Saída')}>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={handleSave}>ADICIONAR</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Formulario;
  