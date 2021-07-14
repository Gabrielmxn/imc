const orderWith = {
  sortByHeight: (tamanho, list) => {
    return list;
  },
  sortByWeight: (tamanho, list) => {
    
    return list;
  },
  sortByName: (tamanho, list) => {
    
  },
  sortByImc: (tamanho, list) => {
  
    return list;
  },
  sortByCategory: (tamanho, list) => {
   
    return list;
  }
}


export default function orderQuickSort(list, order){
  //tamanho do array
  const tamanho = list.length;
  //SELECTION SORT - Ordenar por número da chamada
  //console.log(order)
  return orderWith[`${order}`](tamanho, list)
}