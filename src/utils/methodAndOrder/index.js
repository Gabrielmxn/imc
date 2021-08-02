import orderSelectionSort from './selectionSort'
import orderBubbleSort from './bubbleSort'
import orderInsertionSort from './insertionSort'
import orderMergeSort from './mergeSort'
import orderQuickSort from './quickSort'

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
  
  var antes = Date.now();
  let array = isMethod[method](list, order);
  var duracao = Date.now() - antes;
  console.log(duracao);
  return array;
}

