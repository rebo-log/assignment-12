
////////////////////////////task-1
let sort = function(arr){
    return  arr.map(isEven);
   }
   
  function isEven(value, ) {
    return value % 2 === 0;
  }
  console.log(sort([1,2,3,4,5,6,7,8]))
  

  ///////////////////////////////////////////task-3

  let Average = function(numbers){
    return  numbers.reduce(sum) / numbers.length;
   }
   
  
function sum(total ,value, ) {
    return total + value;
  }
  console.log(Average([1,2,3,4,5,6,7,8]))
  ////////////////////////////////////////////////////task-4


  let maxnum = function(numbers){
    return  numbers.filter(mymax) ;
   }
  function mymax(value, ) {
  return value > 20
}
  console.log(maxnum([1,2,3,4,5,6,7,90]))
  ///////////////////////////////////////////////////task-5
////////////////////////////// how i can return 2 values in same function
  let odd_or_Even = function(numbers){
    return  numbers.filter(even) ;
   }
  function even(value, ) {
 return value % 2 === 0 
  
}
function odd(value, ) {
 return value % 2 !== 0 
  
}


  console.log(odd_or_Even([1,2,3,4,5,6,7,8,9]))
  ///////////////////////////////////////////////////task-6
///////////////////////////// i have problems to switch to array of num 

function narcissistic(num) {

 let numb = '' + num;
 let numLength = numb.length;
 let result = 0;  
     for (i in numb) {
       result += Math.pow((+numb[i]), numLength);
     }
       return result === num;
       
   };
   
console.log(  narcissistic(153));

 
