import methodWithOrder from '../';
const callFunction = () => { 
  function methodOrdenacao(e, setMethod, setListTest, listTest, method, order){
    setMethod(e.target.value)
    console.log("aqui")
    const newArrayOrder = methodWithOrder(listTest, method, order);
    setListTest(newArrayOrder);
  }
  function orderOrdenacao(e, setMethod, setListTest, listTest, method, order){
    setOrder(e.target.value)
    console.log("aqui2")
    const newArrayOrder = methodWithOrder(listTest, method, order);
    setListTest(newArrayOrder);
  }
  async function orderT(listTest, method, order){
    console.log("aqui3")
    const variavel = await methodWithOrder(listTest, method, order)
  }
}

export default callFunction;

