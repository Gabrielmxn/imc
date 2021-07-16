export function verificarCategoria(value){
  let categoryMessage;
  
  if((value.valueImc < 18.5)){
    categoryMessage  = "Abaixo do peso";
  }else if((value.valueImc >= 18.5) && (value.valueImc < 25)){
    categoryMessage = "Peso normal";
  }else if((value.valueImc >= 25) && (value.valueImc < 30)){
    categoryMessage = "Sobrepeso";
  }else if((value.valueImc >= 30) && (value.valueImc < 35)){
    categoryMessage = "Obesidade grau I";
  }else if((value.valueImc >= 35) && (value.valueImc < 40)){
    categoryMessage = "Obesidade grau II";
  }else if((value.valueImc >= 40)){
    categoryMessage = "Obesidade grau III";
  }
 

  return {...value, categoria: categoryMessage}
}

export function  calcularImc(listForm){
  let imc =  listForm.peso / (listForm.altura * listForm.altura);
  return {...listForm, valueImc: imc.toFixed(2)}
}
