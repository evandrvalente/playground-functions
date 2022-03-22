// Desafio 10
function techList(arrSkills, nome) {
  //criar array nova para guardar resultado
  let result = [];
  if (arrSkills.length == 0) {
      let emptyArr = 'Vazio!';
      return emptyArr;
  } else {
    
          //ordenar array de skills
          let orderedtechs = arrSkills.sort();        
          
          //lendo array ordenada
          for (let index = 0; index < orderedtechs.length; index +=1) {
              let listtOfTech = {
                  tech: orderedtechs[index],
                  name: nome}         
          result.push(listtOfTech);
          }
          return result;     
  }
  
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let lenghtError = "Array com tamanho incorreto.";
  let numberError = "não é possível gerar um número de telefone com esses valores";
  let phoneNumber;
  if (arrayPhone.length == 11) {   
    let arrayValido = true;
    
    //testar se é positivo, baseado em referencia do w3schools
    let testarvalidade = arrayPhone.every(validPhoneNumber);
    function validPhoneNumber(value) {
        return value >= 0;
    };
    if (testarvalidade == false) {
      return numberError;
      arrayValido = false;
    };
    
    let testarvalidade2 = arrayPhone.every(validPhoneNumber2);
    function validPhoneNumber2(value) {
      return value <= 9;
    };
    if (testarvalidade2 == false) {
      return numberError;
      arrayValido = false;
    };
  
  let repeated = false;
  for (let index = 0; index < arrayPhone.length; index += 1) {
    let testItem = arrayPhone[index];
    let couterReps = arrayPhone.filter(testRep);
    function testRep (value) {
      return value == testItem
    };
    if (couterReps.length >= 3) {
      repeated = true;
      arrayValido = false;
      return numberError;
    }       
  }
 
  if (arrayValido == true) {
    let phoneNumber = "";
    phoneNumber = "(" + arrayPhone[0] + arrayPhone[1] + ") " + arrayPhone[2] + arrayPhone[3] + arrayPhone[4] + arrayPhone[5] + arrayPhone[6] + "-" + arrayPhone[7] + arrayPhone[8] + arrayPhone[9] + arrayPhone[10];
    return phoneNumber;
  } 
        

  } else {
        return lenghtError;
  };     
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //checar soma de lados
  let sumBC = lineB + lineC;
  let subBC = Math.abs(lineB - lineC);
  if (lineA < sumBC && lineA > subBC) {
    return true;
  } else {
    return false;
  };
} 

// Desafio 13
function hydrate(happyHour) {
  let arrayDrinks = happyHour.match(/\d/g);
  //parametro do match pesquisado no stackoverflow
  let nuevoArray = [];
  for (let index = 0; index < arrayDrinks.length; index++) {
   teste = parseInt(arrayDrinks[index])
   nuevoArray.push(teste);
  }
  let sum = nuevoArray.reduce(sumDrinks);
    function sumDrinks (total, value) {
      return total + value;
    }
  
  let welcomeTrybe;  
  
  if (sum == 1) {
    welcomeTrybe = sum + " copo de água";
  } else {
    welcomeTrybe = sum + " copos de água";
  }
  
  return welcomeTrybe;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
