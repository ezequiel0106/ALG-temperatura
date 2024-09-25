// Solicitar a temperatura em graus celsius
 let temp = parseFloat(prompt("Insira a temperatura em celsius"));

 //verificar a classificação da temperatura
  
 if (temp < 0){
    alert("Muito frio");
 }else if (temp >= 0 && temp <= 15){
    alert("Está frio")
 }else if (temp >= 16 && temp <= 25){
    alert("Agradável")
 }else if (temp >= 26 && temp <= 35){
    alert("Está quente")
 }else if(temp >35) {
    alert("Muito quente")
 }
