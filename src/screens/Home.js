//import Header from '../components/header';
import Form from '../components/form/';
import { useState } from 'react';
//import Footer from '../components/header';
import Tabela from '../components/tabela';


const Home = () => {
  const [formList, setFormList] = useState();
  function recuperarForm(element){
    const {nome, altura, peso, valueImc, categoria, id} = element
    setFormList(
      {
        nome,
        altura: parseFloat(altura),
        peso: parseFloat(peso),
        valueImc: parseFloat(valueImc),
        categoria,
        id
      }
    );
  }
  return (
    <>
      <Form setFormListTest={recuperarForm}/>
      {formList === undefined || formList === "" ?  ""  : <Tabela listPeople={formList}/>}
    </>
  )
}

export default Home;