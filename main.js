/// task 2.16
// function countAverage() {
//   let gallons = prompt("please enter the gallons");
//   let miles;
//   let totalGallons = 0;
//   let totalMiles = 0;
//   let average = 0;

//   while (gallons != -1) {
//     totalGallons += Number(gallons);
//     miles = prompt("please enter the miles");
//     totalMiles += Number(miles);
//     gallons = prompt("please enter the gallons");
//   }
//   average = totalMiles / totalGallons;
//   alert(average);
// }
// countAverage();

/// task 2.17

// function countLimit() {
//  let accountNumber = 0
//  let beginningBalace = 0;
//  let charges = 0;
// let totalCredits = 0;
//  let creditLimit = 0;
//   //let newBalance = beginningBalace + charges - totalCredits;
//   while (accountNumber != -1) {
//     accountNumber =  prompt("please enter account number");
//      beginningBalace =  prompt("please enter balance");
//      charges =  prompt("please enter charges");
//      totalCredits =  prompt("please enter total Credits");
//      creditLimit =  prompt("please enter total Credits");
//      newBalance = beginningBalace + charges - totalCredits;
//     console.log(
//       accountNumber,
//       creditLimit,
//       newBalance,
//     );
//   }
//   if(newBalance> creditLimit){
//     console.log(
//         accountNumber,
//         creditLimit,
//         newBalance,
//         "Credit limit Exceeded"
//       );

//   }
// }
// countLimit();


//// task 2.18
// function countSales(){
//     let sales = prompt('please enter your sellery')
//     let finalSales = 0;
//     while (sales != -1){
//         finalSales = 200 + 0.09 * sales;
//         //alert(finalSales)

//     }
//     alert(finalSales)
// }
// countSales()
//// task 2.19 ///////////////////////////////
//  function countSalery(hours, rate){
//      let salery = 0; 
//          if(hours<= 40)
//             salery = rate * hours;
//          else 
//             salery = 40.0 * rate + ( hours - 40.0 ) * rate * 1.5;
     
//      return salery
//  };
//  console.log(countSalery(40, 10));
///// task 2.20/////////////////////////
// let counter = 0;
// let number = +prompt("Enter a number");
// let largest = 0;

// while (counter < 10) {
//     number = +prompt("Enter a number");
//   if (largest < number) {
//     largest = number;
//   }
//   counter++
// }
// console.log(largest)


/////// task 21////////////////
// let n = 1;
// while( n <= 5) {
//     console.log(n, 10 * n, 100 * n, 1000 * n );
//     n++
// }
////// task 2.22//////////////
// let counter = 0;
// let number = +prompt("Enter a number");
// let largest = 0;
// let secondLargest = 0;

// while (counter < 10) {
//     number = +prompt("Enter a number");
//   if (number > largest) {
//       secondLargest = largest;
//     largest = number;
//   }
//   else if(number > secondLargest) {
//       secondLargest = number;
//   }
//   counter++
// }

// alert(largest);
// alert(secondLargest);

//// 2.28 //////////
// let side =  +prompt('Enter the square side');
// let row = 0;
// let size = side;

// while(side > 0) {
//     row = size;
//     while(row > 0) {
//         if(size == side || side == 1 || row == 1 || row == size){
//            document.write("*")
//         }
//         else {
//             document.write("-");
//         }

//         row--;

//     }
//     document.write("<br>");
//     side--;
// }

//// task 2.29//////
 
// function isPolindrom(){
//     let number, firstDigit, secondDigit, fourthDigit, fifthDigit;
//     number = prompt("please enter 5 digits number")
//     firstDigit =Math.floor(number / 10000);
//     secondDigit =Math.floor(number % 10000 / 1000);
//     fourthDigit =Math.floor(number % 10000 % 1000 % 100 / 10);
//     fifthDigit =Math.floor(number % 10000 % 1000 % 10);
//     if ( firstDigit == fifthDigit && secondDigit == fourthDigit ){
//         alert("number is polindrom")
//     }else
//          alert("number is not polindrom")
//     return 0
// }   
// isPolindrom()
//// task 2.30 ////////
    //     let binary, number, decimal = 0, highBit = 16, factor = 10000;
    //     number = prompt("enter binary number, max 5 digits");
    //     number = binary;
    //     while(highBit >= 1 ){
    //         decimal += binary/factor*highBit;
    //         highBit/=2;
    //         binary%= factor;
    //         factor/= 10;
    //     }
    //    console.log("The decimal number is equal of" + number + ' is '  + Math.floor(decimal));
    
///// task 2.31 //////
    // let side = 8;
    // let row = 0;
    // while (side > 0) {
    //   row = 8;
    //   if (side % 2 !== 0) document.write("_");
    //   while (row > 0) {
    //     document.write("* ");
    //     row--;
    //   }
    //   document.write("<br />");
    //   side--;
    // }
///// task 2.33/////
    // let radius = +prompt('Enter the radius');
    // let pi = 3.14159;
    // console.log("The diameter is " + radius * 2 );
    // console.log("The circumference is " + radius * 2 * pi);
    // console.log("The area is " + radius * radius * pi)
///// task 2.35 ////
    // let a = +prompt('Enter first number');
    // let b = +prompt('Enter second number');
    // let c = +prompt('Enter third number');

    // if ( c * c == a * a + b * b ) {
    //     console.log('can be sides of a triangle')
    // } else {
    //     console.log("can't be sides of a triangle")
    // }
///// task 2.26 ////
    // do {
    //     let a = +prompt('Enter first number');
    //     let b = +prompt('Enter second number');
    //     let c = +prompt('Enter third number');
    // }
    //  while ( a <= 0 || b <= 0 || c <= 0 );
    // if ( c * c == a * a + b * b ) {
    //     console.log('are sides of a triangle')
    // } else {
    //     console.log("are not sides of a triangle")
    // }
/////// task 2.38 ////////
    //a
    // function factorial(num)
    // {
    //     let result = 1;
    //     for (let i = 2; i <= num; i++)
    //         result = result * i;
    //     return result;
    // }

    // console.log(factorial(5))

    //b
    // let n = 0;
    // let fact = 1;
    // let accuracy = 10;
    //  Math.E= 1;

    //  while ( n < accuracy ) {
    //  fact *= n;
    //  Math.E += 1 / fact;
    // n++
    // }
    // console.log(Math.E)
////// task 2.40 //////
    // let sum = 0;
    // let number = +prompt("Enter the number");
    // let value = 0;

    // for (let i = 1; i <= number; i++) {
    //   value = +prompt("Enter a value: ");
    //   sum += value;
    // }
    // console.log("Sum of the " + number + " values is " + sum);
///// task 2.43 /////
    //  let number = +prompt("Enter the number");
    //  let value = 0;
    //  let smallest = +prompt("Enter the value")
    //   for (i= 2; i<= number; i++){
    //       value = +prompt("emter the value");
    //     if (value< smallest)
    //     smallest = value;
    //   }
    // console.log(smallest)
///// task 2.44 ///
    // let product = 1;
    // for(let i = 3; i <= 15; i += 2) {
    //     product *= i;
    // }
    // console.log(product)
///// task 2.46 ///
// let amount;
// let principal = 1000;

// for (let rate = 5; rate <= 10; rate++) {
//   console.log(
//     "Interest Rate: " + rate / 100 + "\n" + "Year   Amount on deposit"
//   );

//   for (let year = 1; year <= 10; year++) {
//     amount = Math.floor(principal * Math.pow(1 + rate / 100, year));
//     console.log(year + "        " + amount);
//   }
//   console.log("\n");
// }

///// task 2.47 ///

//a/////////////////////////
// for(let i = 0; i <= 10; i++) {
//     for(let j = 0; j < i; j++) {
//         document.write('*');
//     }
//     document.write('<br />')
// }
// document.write('<br />')

////b//////////
// for(let i = 10; i > 0; i--) {
//     for(let j = i; j > 0; j--) {
//         document.write('*');
//     }
//     document.write('<br />')
// }
// document.write('<br />')

////c/////////////
// for(let i = 10; i > 0; i--) {
//     for(let j = 0; j < 10 - i; j++) {
//         document.write('_');
//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*');
//     }
//     document.write('<br />')
// }
// document.write('<br />')

////d//////////////
// for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < 10 - i; j++) {
//         document.write('_');
//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*');
//     }
//     document.write('<br />')
// }
// document.write('<br />')

//////task 2.48 /////

// let number = 0;
// for (let i = 1; i <= 5; i++) {
//   number = +prompt("Enter 5 numbers between 1 and 30: ");
//   for (let j = 1; j <= number; j++) {
//       document.write("*")
//     };
//   document.write("<br />");
// }

//////task 2.55 /////

// let count = 0;
// let c;
// let ab;
// for (let i = 1; i <= 500; i++) {
//   for (let j = 1; j <= 500; j++) {
//     for (let k = 1; k <= 500; k++) {
//       c = k * k;
//       ab = i * i + j * j;
//       if (c == ab) {
//         console.log(i, j, k);
//         count++;
//       }
//     }
//   }
// }
// console.log(count)

///// task 3.20 //////////

// function multiple(num1, num2) {
//     if (num2 % num1 === 0) {
//         console.log(num2 + ' is a multiple of ' + num1)
//     } else {
//         console.log(num2 + ' is not a multiple of ' + num1)
//     }
// }
// multiple(12, 3)

///// task 3.21//////////

// let num = +prompt('Enter a number');

// function isEven(num) {
//     while(num != -1) {
//         if(num % 2) {
//             console.log(num + ' is even')
//         } else {
//             console.log(num + ' is odd')
//         }
//         num = +prompt('Enter a number');
//     }
// }
// isEven(num)

///// task 3.22/////////

// let side = +prompt('Enter number');

// function square(side) {
//     for(let i = 0; i < side; i++) {
//         for(let j = 0; j < side; j++){
//         document.write('*')
//     }
//         document.write('<br />')
//     }
// }
// square(side)

////// task 3.26//////////

// let hours = +prompt('Enter hours');
// let minutes = +prompt('Enter minutes');
// let seconds = +prompt('Enter seconds');
// let temp = 0;

// function calcTime(hours, minutes, seconds) {
//     return 3600 * ( hours >= 12 ? hours - 12 : hours ) + 60 * minutes + seconds;

// }

// temp = calcTime(hours, minutes, seconds);

//  hours = +prompt('Enter hours');
//  minutes = +prompt('Enter minutes');
//  seconds = +prompt('Enter seconds');

// console.log( calcTime(hours, minutes, seconds) - temp )

//// task 3.27/////////

// function toCelcius(num) {
//     return Math.round(5 / 9 * (num - 32));
// }

// function toFarenheit(num) {
//     return Math.round(9 / 5 * (num + 32));
// }
// console.log(toCelcius(34));
// console.log(toFarenheit(5))

//  for ( let i = 0; i <= 100; i++ ){
// console.log(i + ' Celcius is equivalent to ' + toFarenheit(i) + ' farenheit' + '\n' )
// }
//  for ( let j = 32; j <= 212; j++ ) {
//     console.log(j +  ' Farenheit is equivalent to ' + toCelcius(j) + ' celcius' + '\n')
// }

////// task 3.25 //////////

// function quotient(a, b) {
//     return a / b
// }
// function remainder(a, b) {
//     return a % b
// }

// // console.log(quotient(5, 2))
// // console.log(remainder(5, 2))

// let number = +prompt('Enter an integer between 1 and 32767');
// let divisor = 10000;
// while( number >=  1) {
//     if(number >= divisor) {
//         console.log(Math.floor(quotient(number, divisor)));
//         number = remainder( number, divisor );
//         divisor = quotient( divisor, 10 );
//     } else {
//         divisor = quotient( divisor, 10 );
//     }
// }
///// task 3.30///////////

//a
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(8));
// //b
// for (let i = 0; i < 1000; i++) {
//   if (isPrime(i)) {
//     console.log(i);
// }
// }

// // c
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < Math.sqrt(num); i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }
//   console.log(isPrime(8));

//   for (let i = 0; i < 100; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//   }
//   }

////// task 3.31 //////////

// function reverseNum(number) {
//     var result = 0,
//       counter = 0;
//     for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
//       counter = i % 10;
//       result = result * 10 + counter;
//     }
//     return result;
//   }
 
//   console.log(reverseNum(547793));

////// task 3.32 //////////
// function gcd(a, b) {
//     if (a == 0)
//         return b;

//     while (b != 0) {
//         if (a > b)
//             a = a - b;
//         else
//             b = b - a;
//     }
//     return a;
// }
///// task 3.33 /////// 

// function qualityPoints(average) {
//     if(average >= 90 && average <= 100) {
//         return 4;
//     } else if(average >= 80 && average < 90) {
//         return 3;
//     } else if(average >= 70 && average < 80) {
//         return 2;
//     } else if( average >= 60 && average < 70){
//         return 1;
//     } else if( average < 60) {
//         return 0
//     }
// }
// console.log(qualityPoints(60));
// console.log(qualityPoints(70))
// console.log(qualityPoints(89))
// console.log(qualityPoints(100))