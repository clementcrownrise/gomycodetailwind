//Reverse a string 
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("computer"));



//Count Characters: Create a function that counts the number of characters in a string.
str = "I am a boy and simbi is a girl"

function countcha(str){
   str = str.replaceAll(' ','')
    let count = 0;
    for (i=0; i < str.length; i++){
        count++
    }
    alert(count);
}

countcha(str);

//function to captilize the first letter of a sentence

function capitalizeWords(sentence){
    let words  = sentence.split(' ');
    result = []

    for(let i= 0; i < words.length; i++){
        let word = words[i];
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(' ')
}

console.log(capitalizeWords("This is my javascript program"))


//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMax([3, 1, 7, 2])); // 7
console.log(findMin([3, 1, 7, 2])); // 1



//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
