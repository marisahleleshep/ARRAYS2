// Given an array of unsorted numbers, return the index of the following target 
// if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6


let num = [45,12,6,89,2,5]
  let target = 6;
let firstIndex = 0;
let lastIndex = num.length-1;
let middleIndex = Math.floor((firstIndex+lastIndex)/2);
while(num[middleIndex]!==firstIndex<=lastIndex){
    console.log(middleIndex);
    console.log(firstIndex);
    console.log(lastIndex);
    if(num[middleIndex]>6){
        lastIndex=middleIndex-1;
    }  else{
        lastIndex=middleIndex+1;
    }
    middleIndex=Math.floor((firstIndex+lastIndex)/2);{
    }
    return num[middleIndex]===lastIndex-1;
    }
    //Given an unsorted array of numbers return the sorted array in descending order
    let arr=[123,89,5,23,9,56]
    function descending (arr,merge){
        let leftIndex = 0;
        let rightIndex = length-1;
        while(leftIndex.length&&rightIndex.length){
            if(leftIndex [0]<rightIndex[0]);{
            arr.push(leftIndex.shift());
        }
    }
    return[...arr ,...leftIndex,...rightIndex];
    }
    function mergeSort(unsortedArray){
        const middleIndex = unsortedArray.length/2;
        if(unsortedArray.length<2){
            return unsortedArray;
        }
        const leftIndex = unsortedArray.splice(0,middleIndex);
        return mergeArrays(mergeSort(leftIndex)),mergeSort(unsortedArray);
    }
    //
    function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
      }
      function merge(left, right) 
        let result = [];
        while (left.length && right.length) 
          if (left[0] >= right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
        