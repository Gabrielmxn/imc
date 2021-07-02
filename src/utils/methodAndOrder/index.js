import orderSelectionSort from './selectionSort'
import orderBolha from './bubbleSort'
import orderInsertionSort from './insertionSort'

const isMethod = {
  selectionSort: orderSelectionSort,
  bolha: orderBolha,
  insertionSort: orderInsertionSort,
}




export default function methodWithOrder(list, method, order){
  console.log(method)
  return isMethod[method](list, order);
}

