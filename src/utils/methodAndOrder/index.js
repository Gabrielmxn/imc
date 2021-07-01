import orderSelectionSort from '../methodAndOrder/sort'
import orderBolha from '../methodAndOrder/bolha'

const isMethod = {
  selectionSort: orderSelectionSort,
  bolha: orderBolha
}




export default function methodWithOrder(list, method, order){
  console.log(method)
  return isMethod[method](list, order);
}

