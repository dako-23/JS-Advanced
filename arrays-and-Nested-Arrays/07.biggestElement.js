function biggestElement(array){

    let concatArray = [];
    
    array.map(arr => concatArray = concatArray.concat(arr));
    
    let result = concatArray.sort((a, b) => b - a).shift();
    
    return result;
    
    
    
    }
    console.log(biggestElement([[20, 50, 10],[8, 33, 145]]));