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
  const [order, setOrder] = useState('sortByName');
  const [duracao, setDuracao] = useState(0)
  const [verificarModal, setVerificarModal] = useState(false)
  
  function methodOrdenacao(event, methods){
    let optionDom = document.querySelectorAll(`.${Style.methodsOrder}`)
    optionDom.forEach(results => {
      results.classList.remove(`${Style.ativado}`)
    })
    event.target.classList.add(`${Style.ativado}`)
    setMethod(methods)
    const newArrayOrder = methodWithOrder(listTest, method, order);
    setListTest(newArrayOrder);
  }

  function orderOrdenacao(event, methods){
    let optionDom = document.querySelectorAll('.trOrder th')
    optionDom.forEach(results => {
      results.classList.remove(`${Style.ativado}`)
    })
    event.target.classList.add(`${Style.ativado}`)
    setOrder(methods)
    let inicio = Date.now();
    const newArrayOrder = methodWithOrder(listTest, method, order);
    let duration = Date.now() - inicio;
    setDuracao(duration);
    setListTest(newArrayOrder);
  }

  async function orderT(){
    const variavel = await methodWithOrder(listTest, method, order)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( ()  => {
    const setValue =  () => {
      const { listPeople } = props;
      console.log(props)
      if(listPeople){
        let newList = [];
        newList.push(listPeople);
        setListTest([...listTest, ...newList])
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
        <span className={Style.title}>Tipo de método: </span>
          <div className={Style.option}>
            <div>
            <span 
                className={`${Style.methodsOrder} ${Style.ativado}`}
                onClick={
                  (event) => methodOrdenacao(event, 'selectionSort') 
                }>
                Selection
              </span>
              <span 
                className={Style.methodsOrder}
                onClick={
                  (event) => methodOrdenacao(event, 'insertionSort') 
                }>
                Insertion
              </span>
              <span 
                className={`${Style.methodsOrder} ${Style.disable}`}
                disable
                >
                Quick
              </span>
              <span 
                 className={`${Style.methodsOrder} ${Style.disable}`}>Merge</span>
              <span 
                 className={`${Style.methodsOrder} ${Style.disable}`}>Bubble</span>
            
            </div>
              
          </div>
          <table className={Style.tabela}>
            <thead>
              <tr className="trOrder">
                <th className={Style.ativado} onClick={(event) => orderOrdenacao(event, 'sortByName')}>Nome</th>
                <th onClick={(event) => orderOrdenacao(event, 'sortByWeight')}>Peso</th>
                <th onClick={(event) => orderOrdenacao(event, 'sortByHeight')}>Altura</th>
                <th onClick={(event) => orderOrdenacao(event, 'sortByImc')}>IMC</th>
                <th onClick={(event) => orderOrdenacao(event, 'sortByCategory')}>Categoria</th>
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
                  {/*<td className={Style.test}><MdDeleteForever  y='5' size='17px'/></td>*/}
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