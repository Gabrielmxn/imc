export function verificarCategoria(value){
  let categoriaMessage;
  
  if((value.valueImc <= 18.4)){
    categoriaMessage  = "Abaixo do peso";
  }else if((value.valueImc >= 18.5) && (value.valueImc <= 24.9)){
    categoriaMessage = "Peso normal";
  }else if((value.valueImc >= 18.5) && (value.valueImc <= 24.9)){
    categoriaMessage = "Sobrepeso";
  }else if((value.valueImc >= 25.0) && (value.valueImc <= 29.9)){
    categoriaMessage = "Obesidade grau I";
  }else if((value.valueImc >= 30.0) && (value.valueImc <= 34.9)){
    categoriaMessage = "Obesidade grau II";
  }else if((value.valueImc >= 35.0) && (value.valueImc <= 39.9)){
    categoriaMessage = "Obesidade grau III";
  }else if((value.valueImc >= 40)){
    categoriaMessage = "Obesidade grau III";
  }
 

  return {...value, categoria: categoriaMessage}
}

export function  calcularImc(listForm){
  let imc =  listForm.peso / (listForm.altura * listForm.altura);
  return {...listForm, valueImc: imc.toFixed(2)}
}
