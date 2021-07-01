import orderSelectionSort from './selectionSort'
import orderBolha from './bubbleSort'

const isMethod = {
  selectionSort: orderSelectionSort,
  bolha: orderBolha
}




export default function methodWithOrder(list, method, order){
  console.log(method)
  return isMethod[method](list, order);
}

