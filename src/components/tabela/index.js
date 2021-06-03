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
    </section>
  )
}


export default Tabela;