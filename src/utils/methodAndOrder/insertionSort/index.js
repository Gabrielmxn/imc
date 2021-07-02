/*void insercao (int vet, int tam){
int i, j, x;
for (i=2; i<=tam; i++){
	x = vet[i];
	j=i-1;
	vet[0] = x; 
	while (x < vet[j]){
        vet[j+1] = vet[j];
        j--;
    }
    vet[j+1] = x;
}*/

const orderWith = {
  sortByHeight: (tamanho, list) => {
    let aux, j, i;
    for(i=1; i < tamanho; i++){
      aux = list[i];
      j = i - 1;
      while((j>=0) && (aux.altura < list[j].altura)){
        list[j+1] = list[j];
        j--;
      }

      list[j+1] = aux;

    }
    console.log(list);
    return list;
  },
  sortByWeight: (tamanho, list) => {
    let aux, j, i;
    for(i=1; i < tamanho; i++){
      aux = list[i];
       j = i - 1;
      while((j>=0) && (list[j].peso > aux.peso)){
        list[j+1] = list[j];
        j--;
      }

      list[j+1] = aux;

    }
    return list;
  },
  sortByName: (tamanho, list) => {
    let aux, j, i;
    for(i=1; i < tamanho; i++){
      aux = list[i];
       j = i - 1;
      
      while((j>=0) && (aux.nome < list[j].nome)){
        list[j+1] = list[j];
        j--;
      }

      list[j+1] = aux;

    }
    return list;
  },
  sortByImc: (tamanho, list) => {
    let aux, j, i;
    for(i=1; i < tamanho; i++){
      aux = list[i];
       j = i - 1;
  
      while((j>=0) && (aux.valueImc < list[j].valueImc)){
        list[j+1] = list[j];
        j--;
      }

      list[j+1] = aux;

    }
    return list;
  },
  sortByCategory: (tamanho, list) => {
    let aux, j, i;
    for(i=1; i < tamanho; i++){
      aux = list[i];
       j = i - 1;

      while((j>=0) && (aux.categoria < list[j].categoria)){
        list[j+1] = list[j];
        j--;
      }

      list[j+1] = aux;

    }
    return list;
  }
}


export default function orderInsertionSort(list, order){
  //tamanho do array
  const tamanho = list.length;
  //SELECTION SORT - Ordenar por número da chamada
  //console.log(order)
  return orderWith[`${order}`](tamanho, list)
}