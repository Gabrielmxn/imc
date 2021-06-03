import { useEffect, useState} from 'react';
import Tabela from '../../components/tabela'
import Form from '../../components/form'


const Imc = (props) => {
  const [formList, setFormList] = useState();
  function calcularImc(element){
    console.log(element)
    //IMC = Peso / (Altura*Altura)
    //setFormList(element);
  }

  return(
    <>
    <Form calcular={calcularImc}/>
    <Tabela />
    </>
  )
}

export default Imc;