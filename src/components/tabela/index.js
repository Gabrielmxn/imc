/* eslint-disable no-unused-vars */
import { 
  useEffect, 
  useState} from 'react';

import methodWithOrder from '../../utils/methodAndOrder'

import { MdDeleteForever } from "react-icons/md";

import Style from './style.module.scss';
import Duration from '../duration';

const Tabela = props => {
  const [listTest, setListTest] = useState([]);
  const [method, setMethod] = useState('selectionSort');
  const [order, setOrder] = useState('sortByHeight');
  const [duracao, setDuracao] = useState(0)
  const [verificarModal, setVerificarModal] = useState(false)
  function methodOrdenacao(e){
    setMethod(e.target.value)
    const newArrayOrder = methodWithOrder(listTest, method, order);
    setListTest(newArrayOrder);
  }
  function orderOrdenacao(e){
    setOrder(e.target.value)
    let inicio = Date.now();
    const newArrayOrder = methodWithOrder(listTest, method, order);
    let duration = Date.now() - inicio;
    setDuracao(duration);
    console.log(duration);
    setListTest(newArrayOrder);
  }
  async function orderT(){
    console.log("aqui3")
    const variavel = await methodWithOrder(listTest, method, order)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( ()  => {
    const setValue =  () => {
      const { listPeople } = props;
      
      if(listPeople){
        let newList = [];
        newList.push(listPeople);
        setListTest([...listTest, ...newList])
        console.log(listTest);
      }
     
    }

    setValue();
   

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])
  
  orderT();
  return (
    <>
    <main className={Style.container2}>
    <section className={Style.container}>
        <div className={Style.table}>
          <div className={Style.option}>
            <div>
              <span>Tipo de método</span>
              <select  
                onChange={methodOrdenacao} 
                name="select"
                value={method}>
                <option value="selectionSort">Selection Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="quickSort" disabled>Quick sort</option>
                <option value="mergeSort" disabled>Merge sort</option>
                <option value="bubbleSort" disabled>Bubble sort</option>
              </select>
            </div>
            <div>
              <span>Ordenação</span>
              <select 
                onChange={orderOrdenacao} 
                name="select" 
                value={order}>
                <option value="sortByName">Nome</option>
                <option value="sortByWeight">Peso</option>
                <option value="sortByHeight">Altura</option>
                <option value="sortByImc">IMC</option>
                <option value="sortByCategory">Categoria</option>
              </select>
            </div>
          </div>
          <table className={Style.tabela}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>IMC</th>
                <th>Categoria</th>
                <th></th>
              </tr>
            </thead>
          <tbody>
            {
            listTest.map(item => {
              return (
                <tr key={item.id}>
                  <td><span>{item.nome}</span></td>
                  <td>{`${item.peso} kg` }</td>
                  <td>{`${item.altura} m`}</td>
                  <td>{`${item.valueImc}`}</td>
                  <td>{item.categoria}</td>
                  <td className={Style.test}><MdDeleteForever  y='5' size='17px'/></td>
                </tr>
              )    
              })
            }  
          </tbody>
        </table>
        </div>
    </section>
    </main>
    { verificarModal 
      ? <Duration time={duracao}/>
      : ""
    }
    </>
  )
}


export default Tabela;