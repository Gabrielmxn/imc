import Style from './style.module.scss';
import { useState } from 'react';
import { verificarCategoria, calcularImc } from '../../utils/imc';
import  api  from '../../api';

import { MdAddCircleOutline } from "react-icons/md";

async function recuperarApi(){
  const response = await api.get('/randomNames')
  return response.data.results[0].name.first;  
}

const init = {
  nome: "", 
  peso: "",
  altura: ""
}

const Form = (props) => {
  const [listForm, setListForm ] = useState(init);
  const [valueId, setValueId] = useState(0);

  function test(event){
    setListForm({
      ...listForm, 
      [event.target.name]: event.target.name === 'nome' && event.target.value 
      ? event.target.value[0].toUpperCase()  +  event.target.value.substr(1).toLowerCase()
      :  event.target.value >= 0 || event.target.value !== "" 
      ? event.target.value : event.target.value,
      id: valueId});
  }

 
  async function eventoClick(){
    const nameRandom =  await recuperarApi();
    let newList = calcularImc(
      {
        nome: nameRandom,
        peso: Math.floor(Math.random() * 55 + 40),
        altura: parseFloat((Math.random() * 1 + 1.10).toFixed(2)),
        id: valueId
      })
    let listComplet =  verificarCategoria(newList);
    setValueId(valueId + 1);
    props.setFormListTest(listComplet);
    setListForm(init)
  }
  function mudarClass(event){
    event.preventDefault();
    event.target.parentElement.classList.add(`${Style.ativado}`);
  }

  function removerClass(event){
    event.preventDefault();
    event.target.parentElement.classList.remove(`${Style.ativado}`);
  }
  

  async function handleSubmit(event) {
    event.preventDefault();
    let formw = event.target.parentNode.querySelectorAll('form input')
    let newList = Array.prototype.slice.call(formw);
    
    if(newList.every(element => element.value !== "")){
        let newList = calcularImc(listForm)
        let listComplet =  verificarCategoria(newList);

        console.log(listComplet);
        setListForm({...listComplet, id: valueId})
        setValueId(valueId + 1);
        props.setFormListTest(listComplet);
        console.log(listComplet);
        setListForm(init)
    }
  }

  return (
    <div className={Style.containerPrincipal}>
      <section className={Style.container}>
        <div className={Style.formDiv}>
        <span  className={Style.iconAdd} >
        <MdAddCircleOutline onClick={eventoClick}/>
        </span>
          <form className={Style.form}>
            <span>
              <label htmlFor="name" className={Style.formLabel}>Nome</label>
              <input type="text" id="name" onBlur={removerClass} onFocus={ mudarClass } placeholder="Exemplo: Gabriel" name="nome" value={listForm.nome} onChange={ test } />
            </span>
            <span>
              <label htmlFor="weight" className={Style.formLabel}>Peso</label>
              <input type="number" id="weight" onBlur={removerClass} onFocus={ mudarClass }  placeholder="Exemplo: 55.4" onChange={ test } name="peso" value={listForm.peso} />
            </span>
            <span>
              <label htmlFor="height" className={Style.formLabel}>Altura</label>
              <input type="number" id="height" onBlur={removerClass} onFocus={ mudarClass }  placeholder="Exemplo: 1.69" onChange={ test } name="altura" value={listForm.altura} />
            </span>
            <button onClick={handleSubmit}>Enviar</button>
          </form>
        </div>
      </section>
    </div> 
  )
}

export default Form;
