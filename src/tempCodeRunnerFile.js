function highestCount(count) {
  
  //localizar maior valor
  let max = count.reduce(function (a,b){return Math.max(a, b);});
  
  let contador;
  //contar quantas vezes o valor aparece
  for (let i = 0; i = count.length ; i += 1){
    
    let m = count[i];
    if (m === max){
      contador += 1;
    }
  }
  //retornar valor
  return contador;
}
let arr = [9, 1, 2, 3, 9, 5, 7];
console.log (highestCount(arr));