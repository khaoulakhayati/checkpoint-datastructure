function sumDistinctElements(array1, array2) {
  var distinctElements = [];
  
    
    for ( var i = 0; i < array1.length; i++) {
      if (!array2.includes(array1[i])) {
        distinctElements.push(array1[i]);
      }
    }
  
    // Ajouter les éléments de array2 qui ne sont pas présents dans array1
    for (var j = 0; j < array2.length; j++) {
      if (!array1.includes(array2[j])) {
        distinctElements.push(array2[j]);
      }
    }
  
   
    var sum = distinctElements.reduce((acc, val) => acc + val, 0);
  
    return sum;
  }
  
  let array1 = [8, 1, 4, 15];
  let array2 = [13, 1, 15, 9, 26];
  let resultat = sumDistinctElements(array1, array2);
  console.log(resultat);

  //2nd prob
  function calculateDotProduct(vectorA, vectorB) {
    var dotProduct = 0;
    for (var i = 0; i < vectorA.length; i++) {
      dotProduct += vectorA[i] * vectorB[i];
    }
    return dotProduct;
  }
  
  console.log(calculateDotProduct([4, 2, 3], [10, 7, 5]));
  
  function checkOrthogonalPairs(vectors) {
    for (var i = 0; i < vectors.length; i += 2) {
      var vectorA = vectors[i];
      var vectorB = vectors[i + 1];
      var dotProduct = calculateDotProduct(vectorA, vectorB);
  
      if (dotProduct === 0) {
        console.log(" vectors are orthogonal");
      } else {
        console.log(" vectors are not orthogonal");
      }
    }
  }
  
  var vectors = [[1, 2, 3], [-1, 2, -3], [2, -2, 4], [1, 1, -2]];
  checkOrthogonalPairs(vectors);
  
  