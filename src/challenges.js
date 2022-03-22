// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(name) {
  let first = name[0];
  let last = name[name.length - 1];
  let lastAndFirst = last + ", " + first;
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins*3)+(ties);
  return points;
}

// Desafio 6
function highestCount(count) {
  
  //localizar maior valor
  let max = count.reduce(function (a,b){return Math.max(a, b);});
  
  let contador = 0;
  //contar quantas vezes o valor aparece
  for (let index = 0; index < count.length ; index += 1) {
    let compare = count[index] 
      if (compare === max) {
      contador += 1;
    };
  }
  //retornar valor
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    
  let dist1 = Math.abs (mouse - cat1);
  let dist2 = Math.abs (mouse - cat2);
  let result = "";
  
  if (dist1 < dist2) {
      result = "cat1";
  } else if (dist2 < dist1) {
      result = "cat2";
  } else {
      result = "os gatos trombam e o rato foge";
  }

  return result;
}


// Desafio 8
function fizzBuzz(arr) {
  let newArray = [];
    for (let index = 0; index < arr.length; index += 1) {
        let testNumber = arr[index];
        if (testNumber % 3 == 0 && testNumber % 5 != 0) {
            newArray.push("fizz");
        } else if (testNumber % 5 == 0 && testNumber % 3 != 0) {
            newArray.push("buzz");
        } else if (testNumber % 3 == 0 && testNumber % 5 == 0) {
            newArray.push("fizzBuzz");
        } else {
            newArray.push("bug!");
        }
    }
  return newArray;
}

// Desafio 9
function encode(codificar) {
  let encoded = "";
    for (index = 0; index < codificar.length; index += 1){
        let letra = codificar[index];
        
        switch (letra) {
            case "a":
                encoded = encoded + "1";
                break
            case "e":
                encoded = encoded + "2";
                break
            case "i":
                encoded = encoded + "3";
                break
            case "o":
                encoded = encoded + "4";
                break
            case "u":
                encoded = encoded + "5";
                break            
            default:
                encoded = encoded + letra;
        };
    }
    return encoded;
}
function decode(codifiedText) {
  let decoded = "";
    for (index = 0; index < codifiedText.length; index += 1) {
        let letra = codifiedText[index];
        switch (letra) {
            case "1":
                decoded = decoded + "a";
                break
            case "2":
                decoded = decoded + "e";
                break
            case "3":
                decoded = decoded + "i";
                break
            case "4":
                decoded = decoded + "o";
                break
            case "5":
                decoded = decoded + "u";
                break            
            default:
                decoded = decoded + letra;
        };
    }
    return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
