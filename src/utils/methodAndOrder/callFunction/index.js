import methodWithOrder from '../';
const callFunction = () => { 
  function methodOrdenacao(e, setMethod, setListTest, listTest, method, order){
    setMethod(e.target.value)
    const newArrayOrder = methodWithOrder(listTest, method, order);
    setListTest(newArrayOrder);
  }
  function orderOrdenacao(e, setMethod, setListTest, listTest, method, order){
    setOrder(e.target.value)
    const newArrayOrder = methodWithOrder(listTest, method, order);
    setListTest(newArrayOrder);
  }
  async function orderT(listTest, method, order){
    const variavel = await methodWithOrder(listTest, method, order)
  }
}

export default callFunction;

