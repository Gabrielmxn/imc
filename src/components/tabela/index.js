import Style from './style.module.scss';
import { MdDeleteForever } from "react-icons/md";

import { useEffect, useState} from 'react';
const Tabela = props => {
  const [listTest, setListTest] = useState([]);
  
  useEffect( ()  => {
    const setValue = () => {
      let { listPeople } = props;
      if(listPeople){
        let newList = [];
       
        newList.push(listPeople);
        setListTest([...listTest, ...newList])
      }
    }
   setValue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  return (
    <section className={Style.container}>
        <div className={Style.table}>
          <div className={Style.option}>
            <div>
              <span>Tipo de método</span>
              <select name="select">
                <option value="bolha">Bolha</option>
                <option value="sort" selected>Sort</option>
                <option value="valor3">Valor 3</option>
              </select>
            </div>
            <div>
              <span>Ordenação</span>
              <select name="select">
                <option value="nome">Nome</option>
                <option value="peso" selected>Peso</option>
                <option value="altura">Altura</option>
                <option value="imc">IMC</option>
                <option value="categoria">Categoria</option>
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
              </tr>
            </thead>
          <tbody>
            {listTest.map(item => {
              return (
                <tr key={item.nome}>
                  <td>{item.nome}</td>
                  <td>{`${item.peso} kg` }</td>
                  <td>{`${item.altura} m`}</td>
                  <td>{`${item.valueImc}`}</td>
                  <td>{item.categoria}</td>
                  <td className={Style.test}><MdDeleteForever cursor="pointer" size='20px'/></td>
                </tr>
              )    
              })
            }
          </tbody>
        </table>
        </div>
    </section>
  )
}


export default Tabela;