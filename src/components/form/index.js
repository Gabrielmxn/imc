import Style from './style.module.scss';
import {useState } from 'react';

const init = {nome: "", peso: "", altura: ""}
const Form = (props) => {
  const [listForm, setlistForm ] = useState(init);

function test(event){
  setlistForm({...listForm, [event.target.name]: event.target.value});
}
async function  calcularImc(){
  let imc =  listForm.peso / (listForm.altura * listForm.altura);
  return await {...listForm, valueImc: imc.toFixed(2)}
}

async function handleSubmit(event) {
  
  let formw = event.target.parentNode.querySelectorAll('form input')
  let newList = Array.prototype.slice.call(formw);
  event.preventDefault();
  if(newList.every(element => element.value !== "")){
      let novlist = await calcularImc()
      let lisComplet = await verificarCategoria(novlist);
      setlistForm(lisComplet)
      props.setFormListTest(lisComplet)
      setlistForm(init)
  }
  
}

  function verificarCategoria(value){
    let categoriaMessage;
    if(value.valueImc <= 18.4){
      categoriaMessage  = "Abaixo do peso";
    }else if(value.valueImc >= 18.5 && value.valorImc <= 24.9){
      categoriaMessage = "Peso normal";
    }else if(value.valueImc >= 18.5 && value.valorImc <= 24.9){
      categoriaMessage = "Sobrepeso";
    }else if(value.valueImc >= 25.0 && value.valorImc <= 29.9){
      categoriaMessage = "Obesidade grau I";
    }else if(value.valueImc >= 30.0 && value.valorImc <= 34.9){
      categoriaMessage = "Obesidade grau II";
    }else if(value.valueImc >= 35.0 && value.valorImc <= 39.9){
      categoriaMessage = "Obesidade grau III";
    }else {
      categoriaMessage = "Obesidade grau III";
    }

    return {...value, categoria: categoriaMessage}
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