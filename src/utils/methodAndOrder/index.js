import orderSelectionSort from './selectionSort'
import orderBubbleSort from './bubbleSort'
import orderInsertionSort from './insertionSort'
import orderMergeSort from './insertionSort'
import orderQuickSort from './insertionSort'

const isMethod = {
  selectionSort: orderSelectionSort,
  bubbleSort: orderBubbleSort,
  insertionSort: orderInsertionSort,
  mergeSort: orderMergeSort,
  quickSort: orderQuickSort
}




export default function methodWithOrder(list, method, order){
  //chamando a função de ordenação escolhida 
  //e o tipo de ordenação (name, height, weight, imc, category)
  return isMethod[method](list, order);
}

