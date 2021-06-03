//import Header from '../components/header';
import Form from '../components/form/';
import { useState } from 'react';
//import Footer from '../components/header';
import Tabela from '../components/tabela';

const Home = () => {
  const [formList, setFormList] = useState();
  function recuperarForm(element){
    setFormList(element);
  }
  return (
    <>
      <Form setFormListTest={recuperarForm}/>
      {formList === undefined || formList === "" ?  ""  : <Tabela listPeople={formList}/>}
    </>
  )
}

export default Home;