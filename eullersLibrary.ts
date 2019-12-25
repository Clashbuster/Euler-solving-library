
export class eullersLibrary {

  sumNumberArray:Function = (arr: number[]) => {
    let output:number = 0
    for (let i:number = 0; i<arr.length; i++) {
      output += arr[i];
    }
    return output
  }

  squareOfAllSumUpTo:Function = (n:number) => {
    let counter:number = n
    let output:number = 0
      while (counter > 0) {
        output += counter
        counter --
      }
      return output * output
  }

  sumOfAllSquaresUpTo:Function = (n:number) => {
    let counter:number = n
    let output:number = 0
      while (counter > 0) {
        output += counter * counter
        counter --
      }
      return output
  }

  primeSieve:Function = (limit:number) => {
    let arr: number[] = new Array(limit - 1)
        for (let i:number = 0; i < arr.length; i++) {
            arr[i] = i+2
        }
        for (let j:number = 0; j< arr.length; j++) {
          let checkLimit:number = arr[j] * arr[j]
            if (arr[j] != 0 && checkLimit < limit) {
              sievePrime(arr[j], j)
            }
        }
        function sievePrime(multipleOf:number, position:number) {
            for (let k:number = position; k < arr.length; k += multipleOf){
              if (arr[k] != 0 && arr[k] != multipleOf) {
                arr[k] = 0;
              }
            }
          }
          let arr2: number[] = [];    
          for (let l:number = 0; l<arr.length; l++) {
                      if (arr[l] != 0) {
                        arr2.push(arr[l]);
                      }
                    }
                    return arr2;
    }

    booleanSieve:Function = (limit:number) => {
      let length:number = limit + 1
      let arr: Array<Boolean|number > = new Array(length);
          for (let i:number = 0; i < arr.length; i++) {
              arr[i] = true;
          }
          arr[0] = false;
          arr[1] = false;
          for (let l :number = 2; l < length; l++) {
              if (arr[l] == true && l*l < length){
                  let multiple:number = l;
                  while (multiple < limit) {
                      multiple += l
                      arr[multiple] = false
                  }
              }
          }
          let arr2: number[] = [];
  
          for (let k:number = 0; k< arr.length; k++){
              if (arr[k] == true){
                  arr2.push(k);
              }
          }
          return arr2;
  }
}













