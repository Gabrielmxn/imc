const orderWith = {

  sortByHeight: (tamanho, list) => {
    console.log(list);
    for(let i = 0; i < tamanho; i++){
      let menor = i;
      for(let j = i + 1; j < tamanho; j++){
        if(list[j].altura < list[menor].altura){
          menor = j;
        }
      }
      let aux = list[i]
      list[i] = list[menor]
      list[menor] = aux;
      
    }
    return list;
  },
  sortByWeight: (tamanho, list) => {
    console.log(list);
    for(let i = 0; i < tamanho; i++){
      let menor = i;
      for(let j = i + 1; j < tamanho; j++){
        if(list[j].peso < list[menor].peso){
          menor = j;
        }
      }
      let aux = list[i]
      list[i] = list[menor]
      list[menor] = aux;
      
    }
    return list;
  },
  sortByName: (tamanho, list) => {
    console.log(list);
    for(let i = 0; i < tamanho; i++){
      let menor = i;
      for(let j = i + 1; j < tamanho; j++){
        if(list[j].nome < list[menor].nome){
          menor = j;
        }
      }
      let aux = list[i]
      list[i] = list[menor]
      list[menor] = aux;
      
    }
    return list;
  },
  sortByImc: (tamanho, list) => {
    console.log(list);
    for(let i = 0; i < tamanho; i++){
      let menor = i;
      for(let j = i + 1; j < tamanho; j++){
        if(list[j].valueImc < list[menor].valueImc){
          menor = j;
        }
      }
      let aux = list[i]
      list[i] = list[menor]
      list[menor] = aux;
      
    }
    return list;
  },
  sortByCategory: (tamanho, list) => {
    console.log(list);
    for(let i = 0; i < tamanho; i++){
      let menor = i;
      for(let j = i + 1; j < tamanho; j++){
        if(list[j].categoria < list[menor].categoria){
          menor = j;
        }
      }
      let aux = list[i]
      list[i] = list[menor]
      list[menor] = aux;
      
    }
    return list;
  }
}


export default function orderSelectionSort(list, order){
  //tamanho do array
  const tamanho = list.length;
  //SELECTION SORT - Ordenar por número da chamada
  //console.log(order)
  return orderWith[`${order}`](tamanho, list)
}