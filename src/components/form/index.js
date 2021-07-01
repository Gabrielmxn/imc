import Style from './style.module.scss';
import { useState } from 'react';
import { verificarCategoria, calcularImc } from '../../utils/imc';

const init = {nome: "", peso: "", altura: ""}
const Form = (props) => {
  const [listForm, setlistForm ] = useState(init);
  const [valueId, setValueId] = useState(0);

function test(event){
  setlistForm({...listForm, [event.target.name]: event.target.value, id: valueId});
}

async function handleSubmit(event) {
  
  let formw = event.target.parentNode.querySelectorAll('form input')
  let newList = Array.prototype.slice.call(formw);
  event.preventDefault();
  if(newList.every(element => element.value !== "")){
      let newList = calcularImc(listForm)
      let listComplet =  verificarCategoria(newList);
      setlistForm({...listComplet, id: valueId})
      setValueId(valueId + 1);
      props.setFormListTest(listComplet);
      setlistForm(init)
  }
  
}
  return (
    <div className={Style.containerPrincipal}>
      <section className={Style.container}>
        <div className={Style.formDiv}>
          <form className={Style.form}>
            <input type="text" placeholder="Nome" name="nome" value={listForm.nome} onChange={ test } />
            <input type="number" placeholder="Peso (kg)"  onChange={ test } name="peso" value={listForm.peso} />
            <input type="number" placeholder="Altura (m)" onChange={ test } name="altura" value={listForm.altura} />
            <button onClick={handleSubmit} >Enviar</button>
          </form>
        </div>
      </section>
    </div>
     
  )
}

export default Form;