// Chapter 01
// alert("Error! please enter a valid password")
// alert("Welcome to JS Land.. \nHappy Coding!")
// alert(`Welcome to JS Land.. \nHappy Coding!`)
// alert("Welcome to JS Land..")
// alert("Happy Coding!\nPresent this page from creating additional dialags.")
// alert(`Happy Coding!\nPresent this page from creating additional dialags.`)
// alert(`Hello.. I can run JS through my web browser's console`)

// Chapter 02
// Q1

//var username = "Hamza123";
// Q2
//var myName = "Jhone Doe";
// Q3
//var message = "Hello World";

// alert(message)

// Q4
//var age = "15 years old";

// alert(myName)
// alert(age)
// alert("Certified Mobile Application Developer")

// Q5. Write a script to display the following alert using one JS variable:
//  var pizza ="PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(pizza)
// Q6
//  var email="hamza.bashir1504@gmail.com"
//  alert(`My email address is ${email}`)
// Q7
// var book = "A smarter way to learn JavaScript"
// alert(`I am trying to learn from the Book ${book}`)
// Q8
// document.write(`Yah! I can write HTML content through JavaScript`)
// Q9
// alert(`----------------------------------ஜ۩۞۩ஜ----------------------------------`)

// Chapter 03

// Q1
//var age = 20;
// alert(`I am ${age} yaers old`)

// Q2
// alert ("You have visited this site "+age+ " times")

// Q3
/** var birthYear = 1997;
document.write(`My birth years is ${birthYear}. </br>`)
document.write(`Data type of my declared variable is number`)**/

// Q4
// var name = "<b>John Doe</b>";
// var title ="<b>T-shirt(s)</b>";
// var Quantity ="<b>5</b>";

// document.write(`${name} ordered ${Quantity} ${title} on XYZ CLothing store`)

// Chapter 04

// Q1
// var firstName ="Muhammad", lastName="Hamza", age="25";
//  document.write(`${firstName} ${lastName} i am  ${age} years old.`);

// Q2
// Legal Variables

//   var name = "Hamza";
//   var lastName = "Bashir";
//   var $age   = 25;
//   var _religion ="Islam";
//   var hieght$Fit = "5.2inch";
//   var location$ ="Orangi town";
//   var city_Name ="Karachi";
//   var dateOfBirth_ = "kjhe";

// illegal Variables
//   var %Name = "Hamza";
//   var Last-name = "Bashir";
//   var 2age   = 25;
//   var var ="Islam";
//   var hieght.Fit = "5.2inch";
//   var 1stlocation ="Orangi town";

//  Q3
// document.write(`<b>Rules for naming JS variables</b></br></br></br>`);
// document.write(`Variable names can only contain, alphabets , number, _ and $ sign.</br>`);
// document.write(`Variables must begin with a, $ , _ and name.</br>`);
// document.write(`Variable names are case Sensitive.</br>`);
// document.write(`Variable names should not be JS Keywords.`);

// Chapter 05

//    Q1
// var firstNum = +prompt("Enter first number");
// var secondNum = +prompt("Enter Second number");
// var resultSum = firstNum + secondNum;
// document.write(`sum of ${firstNum} and ${secondNum} = ${resultSum} </br>` );

//   Q2
// var resultSub = firstNum - secondNum;
// document.write(`subtraction of ${firstNum} and ${secondNum} = ${resultSub}</br> `);
// var resultDivide = firstNum / secondNum;
// document.write(`division of ${firstNum} and ${secondNum} = ${resultDivide} </br>`);
// var resultMulti = firstNum * secondNum;
// document.write(`multiplication of ${firstNum} and ${secondNum} = ${resultMulti} </br>`);
// var resultmodulus = firstNum % secondNum;
// document.write(`multiplication of ${firstNum} and ${secondNum} = ${resultmodulus} </br>`)

//    Q3
// var number ;
// document.write(`Value after variable declaration is ${number}</br>`);
// number= 5;
// document.write(`Intial value : ${number}</br>`);
// var newNumber = ++number;
// document.write(`Value after increment is: ${newNumber}</br>`);
// newNumber= newNumber+7;
// document.write(`Value after 7 addition is: ${newNumber}</br>`);
// var newNumberDecre = --newNumber;
// document.write(`Value after increment is: ${newNumberDecre}</br>`);
// var remainder = 3;
// document.write(`The remainder is : ${newNumberDecre%remainder}</br>`);

//    Q4
// var costTicket =600;
// var quantityOfTicket = +prompt("quantity of tickets")
// var totalCost = costTicket * quantityOfTicket;
// console.log(totalCost);
// Q5
// var tableNumber = +prompt("Enter a Number");
// for(var i=1 ; i<=10 ;i++){
//     document.write(`${tableNumber} x ${i} = ${tableNumber*i}</br> `)
// }

// Q6
// var celsius =+prompt("Enter Celsius temparatue");
// var Fahrenheit =+prompt("Enter Fahenheit temparatue");
// var celFormula = (Fahrenheit-32)*5/9;
// var fahFormula = (celsius*9/5)+32;
// document.write(`${celsius}<sup>o</sup>C is  ${fahFormula}<sup>o</sup>F </br>`)
// document.write(`${Fahrenheit}<sup>o</sup>F is  ${celFormula}<sup>o</sup>C`)

// Q7
// document.write("<h1>Shopping Cart</h2>");
// var item1 = 650;
// var item2 = 100;
// var item1Quantity =3;
// var item2Quantity =7;
// var shippingCharges =100;
// document.write(`Price of item1 is ${item1}</br>`);
// document.write(`Quantity of item1 is ${item1Quantity}</br>`);
// document.write(`Price of item2 is ${item2}</br>`);
// document.write(`Quantity of item2 is ${item2Quantity}</br>`);
// document.write(`Shipping Charges ${shippingCharges}</br>`);
// document.write(`Total cost of your order is ${(item1*item1Quantity)+(item2*item2Quantity)+shippingCharges}`);

// Q8
// document.write("<h1>Mark Sheet</h2>");
// var total=980;
// var obtainedMark = +prompt("Enter your obtaining mark")
// document.write(`Total marks: ${total}</br>`);
// document.write(`Marks obtained: ${obtainedMark}</br>`);
// document.write(`Percentage: ${obtainedMark*100/total}`);

// Q9
// var dollar = 104.80;
// var riyal = 28;
// var dollarInput = +prompt("Enter your Us dollar");
// var riyalInput = +prompt("Enter your Riyal");
// var result = dollarInput*dollar + riyalInput*riyal;
// document.write(`${result}`)

// Q10
// var number=+prompt("Enter Any Number")
// document.write(`${((number+5)*10)/2}`)

// Q11
// var currentYear = 2023;
// var birthYear = +prompt("Enter your birth year");
// var result = currentYear-birthYear;
// document.write(`Current Year: ${currentYear}</br>`);
// document.write(`Birth Year: ${birthYear}</br>`);
// document.write(`Your Age: ${result-1} or ${result} years old </br>`);

// Q12
// var radius = 20;
// var pi  = 3.142;
// document.write(`Radius of a circle: ${radius}</br>`);
// document.write(`The circumference is: ${2*radius*pi}</br>`);
// document.write(`The ares is: ${pi*Math.pow(radius,2)}</br>`);

// Q13
// var favoriteSnack = "Chocolate chip";
// var currentAge = 20;
// var maxAge = 75;
// var perDayAmount = 2;
// var result = (2*365)*(maxAge-currentAge);
// document.write("<h1>The Lifetime Supply Calculator</h2>");
// document.write(`Favourite Snake: ${favoriteSnack}</br>`);
// document.write(`Current age: ${currentAge}</br>`);
// document.write(`Estimated Maximun Age: ${maxAge}</br>`);
// document.write(`Amount if snacks per day: ${perDayAmount}</br>`);
// document.write(`You will need ${result} ${favoriteSnack} to last you until the ripe old age of ${maxAge}</br>`);

// Chapter 06 - 09

// Q1
// var a = 10;
// document.write(`Result:</br>The value of a is: ${a}</br>`)
// document.write(` ---------------------------------------- </br></br>`)
// document.write(`The value of ++a is: ${++a} </br>`)
// document.write(`Now the value of a: ${a} </br></br></br>`)

// document.write(`The value of a+= is: ${a++} </br>`)
// document.write(`Now the value of a: ${a} </br></br></br>`)

// document.write(`The value of --a is: ${--a} </br>`)
// document.write(`Now the value of a: ${a} </br></br></br>`)

// document.write(`The value of a-- is: ${a--} </br>`)
// document.write(`Now the value of a: ${a} </br>`)

// Q2
// var a =2;
// var b = 1;
// var result= --a - --b + ++b + b--;  // 1 - 0 + 1 + 1
// --a; // first -1 then value print, the value of a = 0
// --a - --b ; //  -1 - -1
// --a - --b + ++b;   //-2 - -2 + -1;
// --a - --b + ++b + b--;  // -3 - -2 + -1 + -1
// document.write(`a is  ${a} </br>`) // a= -3
// document.write(`b is  ${b} </br>`) // b = -2
// document.write(`result is  ${result} </br>`) // resul = 3

// Q3
// var name = prompt("Enter youe full name ");
// document.write(`Assalam o Alaikum </br> ${name}`)

// Q5
//  var number = +prompt("Enter table number") || 5;
//  for(var i=1 ; i<=10 ;i++){
//         document.write(`${number} x ${i} = ${number*i}</br> `)
//     }

// Q6
// var sub1 = "English";
// var sub2 = "Math";
// var sub3 = "Urdu";
// var totalMark = 100;
// var obtained_sub1 = +prompt("Enter your english marks");
// var obtained_sub2 = +prompt("Enter your math marks");
// var obtained_sub3 = +prompt("Enter your urdu marks");
// document.write(
//   `<table border=1><thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></thead><tbody><tr> <td> ${sub1} </td> <td>${totalMark}</td> <td>${obtained_sub1}</td> <td>${obtained_sub1*100/totalMark}%</td></tr><tr> <td> ${sub2} </td> <td>${totalMark}</td> <td>${obtained_sub2}</td> <td>${obtained_sub2*100/totalMark}%</td></tr> <tr> <td> ${sub3} </td> <td>${totalMark}</td> <td>${obtained_sub3}</td> <td>${obtained_sub3*100/totalMark}%</td></tr> <tr> <td></td> <td>${totalMark*3}</td> <td>${obtained_sub1+obtained_sub2+obtained_sub3}</td> <td>${(obtained_sub1+obtained_sub2+obtained_sub3)*100/(totalMark*3)}%</td></tr></tbody></table>`);

// Chapter 09 - 11

// Q1

// var city_Name = prompt("Enter your city");
// if (city_Name == "karachi" || city_Name == "Karachi"){
//     alert("“Welcome to city of lights”")
// }

// Q2

// var gender = prompt("Enter youe gender");
// if (gender == "female" || gender == "Female"){
//     alert("Good Morning Ma’am")
// }
// else if (gender == "male" || gender == "Male"){
//     alert("Good Morning Sir")
// }

// Q3

// var color = prompt("input color of road traffic signal \n e.g red , yellow, green ")
// if (color == "red" || color == "Red"){
//     alert("Must Stop")
// }
// else if (color == "yellow" || color == "Yellow"){
//     alert("Ready to move")
// }
// else if (color == "green" || color == "Green"){
//     alert("Move now")
// }

// Q4
//  var fuel = +prompt("input remaining fuel in car (inlitres) ");
//  if(fuel < 0.25){
//     alert("“Please refill the fuel in your car”")
//  }
//  else{
//     alert("No Problem drive your car")

//  }

// Q5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); //true
// }
// /////////////////////////////
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true"); //true
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true"); //true
// }
// // /////////////////////////////////////
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); //true
// }
// ////////////////////////////////////////////// 

// if (true){
//     alert("True");
// }
// if (false){
//  alert("False");
// }
//  //////////////////////////////  
// if("car" < "cat"){
//         alert("car is smaller than cat");
// }

// Q6
// var totalMark = 300;
// var obtained_sub1 = +prompt("Enter your english marks");
// var obtained_sub2 = +prompt("Enter your math marks");
// var obtained_sub3 = +prompt("Enter your urdu marks");
// var markObtained = obtained_sub1+obtained_sub2+obtained_sub3;
// var percentage = markObtained*100/totalMark;
// document.write("<h1>Mark Sheet</h1></br></br></br>");
// document.write(`Total marks : ${totalMark} </br>`);
// document.write(`Marks obtained : ${markObtained} </br>`);
// document.write(`Percentage : ${percentage}% </br>`);
// if(percentage >= 80){
// document.write(`Grade : A-one </br>`);
// document.write(`Remarks : Excellent </br>`);
// }
// else if(percentage >= 70){
// document.write(`Grade : A </br>`);
// document.write(`Remarks : Good </br>`);
// }
// else if(percentage >= 60){
// document.write(`Grade : B </br>`);
// document.write(`Remarks : You need to improve </br>`);
// }
// else{
// document.write(`Grade : Fail </br>`);
// document.write(`Remarks :  </br>`);
// }

// Q7
// var secretNumber = 4;
// var guessNumber = +prompt("Enter a number (1 to 10)");
// if (secretNumber === guessNumber){
//     document.write("“Bingo! Correct answer”")
// }
// else  if (secretNumber+1 === guessNumber){
//     document.write("“Close enough to the correct answer”")
// }
// else  if (secretNumber-1 === guessNumber){
//     document.write("“Close enough to the correct answer”")
// }
// else {
//     document.write("Sorry try again!")
// }

// Q8

// var userInput =+prompt("Enter a number")
// if (userInput % 3 == 0){
//     document.write("The number is divisible by 3!")
// }
// else{
//     document.write("Sorry try again!")

// }

// Q9
// var userInput = +prompt("Enter a number")
// if (userInput % 2 == 0 ){
//     document.write("The input is Even number")
// }
// else {
//     document.write("The input is Odd number")

// }

// Q10
// var userInput =+prompt("Enter a Temperature 10 to 40 degree range")
// if (userInput >= 40){
//     console.log("It is too hot outside.");
// }
// else if (userInput >= 30){
//     console.log("The Weather today is Normal.”");
// }
// else if (userInput >= 20){
//     console.log("Today’s Weather is cool.”");
// }
// else if(userInput >= 10){
//     console.log("“OMG! Today’s weather is so Cool.””");
// }

// Q11
//  var firstNumber = +prompt("Enter a first Number");
//  var operator = prompt("Enter a operator ( either +, -, * or / )");
//  var secondNumber = +prompt("Enter a second Number");
//  var result;
//  if( operator == "+"){
//     result = firstNumber +secondNumber;
//     console.log(result);

//  }
// else if (operator == "-"){
//     result = firstNumber - secondNumber;
//     console.log(result);

// }
// else if (operator == "*"){
//     result = firstNumber * secondNumber;
//     console.log(result);

// }
// else if (operator == "/"){
//     result = firstNumber / secondNumber;
//     console.log(result);

// }

// Chapter 12 - 13

// Q1
//  var userInput =  prompt("Enter a character")
//  var a = userInput.charCodeAt(0);
// if (a >= 65 && a <=90){
//     console.log( userInput +" is a Uppercase letter");

// }
// else if (a >= 97 && a <=122){
//     console.log( userInput +" is a Lowercase letter");

// }
// else if (userInput>=1 && userInput<=99999999){
//     console.log( `${userInput} is a Number`);

// }
// else{
//     console.log( "Only same charater insert");

// }

// Q2

// var userInput1 = +prompt("Enter a number") ;
// var userInput2 = +prompt("Enter another number");
// if(userInput1 == userInput2){
//     console.log(userInput1 +" is equal to "+ userInput2)
// }
// else if(userInput1 >= userInput2){
//     console.log(userInput1 +" is larger than "+ userInput2)
// }
// else if(userInput1 <= userInput2){
//     console.log(userInput1 +" is lesser than "+ userInput2)
// }

// Q3
// var userInput1 = +prompt("Enter a number");
// if(userInput1 == 0){
//     console.log(userInput1 +" Number is Neutral")
// }
// else if(userInput1 > 0){
//     console.log(userInput1 +" Number is Positive")
// }
// else if(userInput1 < 0){
//     console.log(userInput1 +" Number is Negative")
// }

// Q4

// let userInput = prompt("Write  any signal alphabet");
// if (userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u" || userInput == "A" ||userInput == "E" ||userInput == "I" ||userInput == "O" ||userInput == "U" ){
//     alert("true")
// } else {
//     alert("false")
// }

// Q5
//  var password1 = prompt(" Enter  password");

//  if (password1 != ""){
//    var  password2 = prompt("Please enter your password")
//  }
// if(password1 == password2){
//     console.log(" Correct! The password you entered matches the original password")
//  }
// else{
//     console.log("Incorrect password")

// }
// Q6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// document.write(greeting = "Good day");
// }
// else{
//    document.write(greeting = "Good evening ");
// }
// Q7

// var time = +prompt("Enter your time (24 hours clock format like: 1900 = 7pm.)")
// if (time >= 0000 && time < 1200){
//    alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700){
//    alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100){
//    alert("Good Evening!")
// }
// else if (time >= 2100 && time < 2400){
//    alert("Good Night!")
// }
// else{
//    alert("Soory wrong input")
// }

// Chapter 14 - 17

// Q1-
// var students= [];
// Q2-Q3
// students=['reyyab','yasir','faizan','jazim'];
// console.log(students)
// Q4
// var numbers = [1,4,6,34,5,34,4];
// Q5
// var boolean = [true,false];
// Q6
// var mixed = ["ejhcje",45,'hamza',true , "hello",false,34]

// Q7
//  var mobileNetworks = ['zong','telenor','ufone','warid']

// Q8

// var qualifications = ["SSC", 'HSC', 'BCS',
//     'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
//     for(a=0 ; a<qualifications.length;a++){
// console.log(a+1+") "+qualifications[a])
// }
// Q9
// let topMovies =[];
// topMovies[0]=prompt('Enter movie name');
// topMovies[1]=prompt('Enter movie name');
// topMovies[2]=prompt('Enter movie name');
// topMovies[3]=prompt('Enter movie name');
// console.log("1)"+topMovies[0]);
// console.log("2)"+topMovies[1]);
// console.log("3)"+topMovies[2]);
// console.log("4)"+topMovies[3]);
// console.log("Length of the array:"+topMovies.length);

// Q10
// const favoriteCars =['Audi', 'Suzuki','Toyota','Tesla'];
// console.log(`Fovorite Cars`)
// console.log(favoriteCars)
// console.log(`First index of the array:${ favoriteCars.indexOf('Audi')}`)
// console.log("Car at first index of the array:"+favoriteCars[favoriteCars.indexOf('Audi')])
// console.log(`First index of the array:${ favoriteCars.length}`)
// console.log("Car at first index of the array:"+favoriteCars[favoriteCars.length-1])

// Q11
// var students = ["Yasir", "Faizan", "Jazim", "hamza"];
// var marks = [320, 230, 480, 345];
// for (a = 0; a < students.length; a++) {
//   document.write(
//     `Score of ${students[a]} is ${marks[a]}. Percentage: ${
//       (marks[a] / 500) * 100
//     }%</br>`
//   );
// }
// Q12
// var colorNames = ["red", "green", "blue",'pink','black'];
// document.write(colorNames+"</br>");
//a
// var colorAssStart = prompt("Enter color name show start the list");
// colorNames.unshift(colorAssStart);
// document.write(colorNames+"</br>");
//b
// var colorAddEnd = prompt("Enter color name show End the list");
// colorNames.push(colorAddEnd);
// document.write(colorNames+"</br>");
//c
// var colorAddStart1 = prompt("Enter two color name show Start the list\nFirst color name insert");
// colorNames.unshift(colorAddStart1);
// var colorAddStart2 = prompt("Enter two color name show Start the list \nSecond color name insert");
// colorNames.unshift(colorAddStart2);
// document.write(colorNames+"</br>");
//d
// colorNames.shift();
// document.write(colorNames+"</br>");
//e
// colorNames.pop();
// document.write(colorNames+"</br>");
//f
// var index1 = +prompt("Enter position ");
// var colorF = prompt("Enter color name");
// colorNames.splice(index1-1,0, colorF);
// document.write(colorNames+"</br>");
//g
// var index1 = +prompt("Enter position ");
// var index2 = +prompt("how many colors wants to delete");
// colorNames.splice(index1-1,index2);
// document.write(colorNames+"</br>");

// Q13
// var score = ["320","230",'480','120']
// document.write("input = "+score+"</br>");
// document.write("ascending = "+score.sort());

// Q14
// var fruits = ['strawberry', 'apple', 'orange', 'banana'];
// console.log("Fruits list:\n"+fruits);
// console.log("Ordered fruits list:\n"+fruits.sort())

// Q15
// var cities = ['karachi','lahour','islamabad','quetta','peshawar']
// document.write(cities+"</br>");
// document.write(cities.slice(2,5));

// Q16

// var arr = ['This ', ' is ', ' my ', ' cat'];
// document.write("Array:</br>"+arr+"</br>");
// var text = arr.join("");
// document.write("String:</br>"+text+"</br>");

// Q17

// var queue =  ['hello','hefk','sjhdj','asdh','jgh','jkfd','aksjd']
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");
// queue.shift();
// document.write(queue+"</br>");

// Q18

// var queue =  ['hello','hefk','sjhdj','asdh','jgh','jkfd','aksjd']
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");
// queue.pop();
// document.write(queue+"</br>");

// Q19
// document.write(`<select name="cars" >
// <option value="volvo">Apple</option>
// <option value="saab">Samsung</option>
// <option value="mercedes">Motorola</option>
// <option value="audi">Nokia</option>
// <option value="audi">Sony</option>
// <option value="audi">Haier</option>
// </select>`)

// Q20
// Declare and initialize an empty multidimensional array.
// (Array of arrays
// var Arr=[[,[]],[],[]];
// console.log(Arr[0])

// Q21
// Declare and initialize a multidimensional array representing
// the following matrix:
// var Arr=[[0,[1]],[2],[3]];
// document.write(Arr)

//  0 1 2 3
//  1 0 1 2
//  2 1 0 1


//  Assignment 17 - 20


// Q2  Declare and initialize a multidimensional arrayrepresenting the following matrix:
// let array1 = ["0", "1", "2", "3"];
// let array2 = ["1", "0", "1", "2"];
// let array3 = ["2", "1", "0", "1"];
// console.log(array1);
// console.log(array2);
// console.log(array3);

// Q3

// for(a=1;a<11;a++  ){
//     console.log(a);
// }

// Q4

// var input1 = +prompt ("Enter a number to show its multiplication table")
// var input2 = +prompt ("Enter length multiplication table")
// console.log(`multiplication table of ${input1} Length ${input2}`)
// for (let a=1 ; a<=input2 ;a++){
//     console.log(`${input1} x ${a} = ${input1*a}`)

// }

// Q5

// var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
// console.log(fruits)
// console.log(fruits.length)
// for(a=0;a<fruits.length;a++  ){

//     console.log(`Element at index ${a} is ${fruits[a]}`)

// }

// Q6
// a Counting
// for (let a = 1;a<=15;a++ ){
//     console.log(a);
// }
// b  Reverse counting
// for (let a = 10;a>=1;a--){
//     console.log(a);
// }
// c Even
// for (let a =0;a<=20;a++ ){
//     if (a%2==0){
//     console.log(a);
// }
// }
// d Odd
// for (let a =0;a<=20;a++ ){
//     if (a%2==1){
//     console.log(a);
// }
// }
// e Series 
// for (let a =2000;a<=20000;a++ ){
//     if(a%2000==0){
//     console.log(a/1000+'k');
// }
// }

// Q7
// let a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let input  = prompt("Welcome to Marhaba Bakery. What do you want to order Sir/Ma'am?")
// let flag = false;
// let indexNumber ;
// for(let x=0;x<a.length;x++){
//  if(a[x].includes(input)){
//     flag=true;
//     indexNumber = x;
//  }
// }
// console.log(indexNumber)
// if(indexNumber>=0){
//     console.log(`${input} is available at index ${indexNumber} in our bakery`)
// }
// else{
// console.log(`We are sorry. ${input} is not available in our bakery `)
// }


// Q8
// let numberArray = [24,53,78,110,91,12]
// let maxNumber = 0
// for(let x=0; x<numberArray.length; x++){
//     if(maxNumber<numberArray[x])
//     maxNumber = numberArray[x]
    
// }
// console.log(`The Largest number is ${maxNumber}`)

// Q9
// let numberArray = [24,53,78,110,91,12,5]
// let maxNumber = numberArray[0]
// for(let x=0; x<numberArray.length; x++){
//     if(maxNumber>numberArray[x])
//     maxNumber = numberArray[x]
    
// }
// console.log(`The smallest number is ${maxNumber}`)
// Q10

// for (let a=1 ;a<=100;a++){
//     if(a%5==0){
//         console.log(a)
//     }
// }


//  Assignment 21 - 25

// Q1

// var firstName  = prompt("Enter your First name");
// var LastName  = prompt("Enter your Last name");
// let fullName = `Assalam-o-Alaikum ${firstName} ${LastName}`
// console.log(fullName)

// Q2
// var userInput = prompt('Enter your favorite mobile model');
// console.log(`Length of string: ${userInput.length}`)


// Samsung Galazxy S6 Edge Plus

// Q3

// var index = "Pakistani";
// var result = index.indexOf("n")
// console.log("Index of 'n' "+ result)


// Q4

// var index = "Hello World";
// var result = index.lastIndexOf("l")
// console.log("Index of 'n' "+ result)

// Q5


// var index = "Pakistani";
// var result = index.charAt(3);
// console.log("Index of '3' "+ result)


// Q6

// var firstName = "Muhammad";
// var lastName = "Hamza";
// console.log(`Hello ${firstName} ${lastName}`)

// Q7
// var cityName  = "Hyderabad"
// var inputUser = prompt('Enter alphabet in the word od Hyderabad')
// var inputUser1 = prompt('Enter a changed alphabet in the word od Hyderabad')
// console.log(`After replacement: ${cityName.replace(inputUser , inputUser1)}`)

// Q8

// var input = "Ali and Sami are best friends. They play cricket and football together."
// console.log(`After replacement: ${input.replace(/and/g, '&')}`)

//  Q9

// var numberInput  = '472'
// console.log('value: '+numberInput);
// console.log("Tyoe: "+typeof(numberInput));
// var convertNumber = parseInt(numberInput)
// console.log('value: '+numberInput);
// console.log("Tyoe: "+typeof(convertNumber));

// Q10

// var userInput = prompt("Enter Url format  (www.facebook.com / www.yahoo.com )");
// var domain = userInput.indexOf('.')
// var domain2 = userInput.slice(domain+1)
// console.log(domain2)

// let margin = "c1210pxdvsd1254"
// let x= +margin
// console.log(parseInt(x))
// console.log(typeof(x))


// Q11
// var userInput = prompt('Enter a input (do you want )');
// console.log(userInput.toUpperCase());

// Q12
// var userInput = prompt('Enter a input (do you want )');
// console.log(userInput.toLowerCase());


// // Q13
// var userInput =  "helLo worlD of";
// var words  =  userInput.split(" ");
// console.log(words)
// for(var a = 0 ; a<userInput.length; a++){
//      words[a] =words[a].slice(0,1).toLocaleUpperCase() + words[a].slice(1).toLocaleLowerCase();
//     console.log(words[a])
    
   
// }
// words.join(" ");
// console.log(words)


// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");





 








// Assignment 35-38

// Q1
// function dateTime(){
// const date =new Date();
// let dateTimeString = date.toLocaleString();
// document.write(date+"</br>");
// document.write(dateTimeString+"</br>");
// }
// dateTime();

// const date_time = function() {
//     const date =new Date();
// document.write(date+"</br>");
// }
// date_time();

// // Q2
// function myfunction1(){
//     var firstName =prompt("Enter first name");
//     var secondName =prompt("Enter second name");
//     alert(`Hello, ${firstName} ${secondName}`)
// }
// myfunction1();
// Q3
//     const myfunction = function(){
//     var firstNum =Number(prompt("Enter first number")) ;
//     var secondNum =Number( prompt("Enter second number"));
//     return firstNum+secondNum;
// }
// console.log(myfunction());

// const mynewfunction = ()=>{var firstNum =Number(prompt("Enter first number")) ;
// var secondNum =Number( prompt("Enter second number"));
// return firstNum+secondNum;}

// console.log(mynewfunction());

// Q4
// const myfunction2 = function(){
//     var firstNumber = +prompt("Enter a first Number");
//  var operator = prompt("Enter a operator ( either +, -, * or / )");
//  var secondNumber = +prompt("Enter a second Number");
//  var result;
//  if( operator == "+"){
//     result = firstNumber +secondNumber;
//     return result;

//  }
// else if (operator == "-"){
//     result = firstNumber - secondNumber;
//     return result;

// }
// else if (operator == "*"){
//     result = firstNumber * secondNumber;
//     return result;

// }
// else if (operator == "/"){
//     result = firstNumber / secondNumber;
//     return result;

// }
// }
// console.log(myfunction2());
// console.log(Math.round(myfunction2()));
// console.log(Math.ceil(myfunction2()));
// console.log(Math.floor(myfunction2()));
// console.log(Math.trunc(myfunction2()));

// Q5

// const myfunction3 = (a)=>{console.log(a*a)}
// // myfunction3();

// // Q6
// . Write a function that computes factorial of a number.
// let result;
// const factorial = function(n){
//     result = n;
//     for(let a=1; a<n; a++){
        
//         result *= (n-a) 
//     }
//     return result
// }
// console.log(factorial(5))

// Q7
// function couting(){
// var input1 =  prompt("Enter a start number");
// var input2 = prompt("Enter a second number");
// for (a=input1; a<=input2;a++ ){
//     document.write(a+"</br>")
// }
// }
// couting();

// Q8

// var base1 = +prompt('Enter a base value');
// var perpendicular1 = +prompt('Enter a perpendicular value');
// var Hypot  = calculateHypotenus(base1,perpendicular1)
// function calculateHypotenus(base, perpendicular) {

//       var hypoteuse = (square(base) + square(perpendicular));
//       return hypoteuse;
//       function square(number) {
//         return number * number
//     }
//   }
// console.log(Hypot);
// var hypoSquare = (base1+perpendicular1)*(base1+perpendicular1)
// console.log(hypoSquare)

// Q8
// var base1 = +prompt('Enter a base value');
// var perpendicular1 = +prompt('Enter a perpendicular value');

// function calculateHypotenuse(base1,perpendicular1){
//     var Hypotenuse =  calculateSquare(base1) + calculateSquare(perpendicular1)
//     return "Rigth angle triangle answer is \n"+Hypotenuse;
//     function  calculateSquare(input){
//         return input*input;

//     }


// }
// console.log(calculateHypotenuse(base1,perpendicular1))


// Q9
// i. Arguments as value
// const argumentAsValue = (width,height)=>{ return width*height}
// console.log(argumentAsValue(5,6))
// // Arguments as variables
// var width  = +prompt("Enter a value of width ")
// var height  = +prompt("Enter a value of height ")
// const argumentAsVariable = (width,height)=>{ return width*height}
// console.log(argumentAsVariable(width,height))

// 10

// var input =  prompt("Enter a Value to check word is  palindrome or not") || "madam" ;
//  console.log(input[0])
//  console.log( Math.floor(input.length/2))
// var numberCollect;
// function myfunction(){
// for(var i=0; i<=Math.floor((input.length/2)-1);i++){

//   if (input[i]==input[input.length-(i+1)]){
//     numberCollect = i;
//   }
 

// }
// if(numberCollect>=0){
//   console.log("This word are palindrome")
  
// }
// else{
//   console.log("This word are not palindrome")

// }
// }
// myfunction()

// Q11

// var input =prompt("Enter a input");
// function capitalFirstLetter(str){
//   console.log(str);
//   var wordSplit = str.split(" ");
//   console.log(wordSplit);
//   for(var i=0; i<wordSplit.length;i++){
//     var word = wordSplit[i];
//     wordSplit[i] = word.charAt(0).toUpperCase() + word.slice(1);

//     return wordSplit.join(" ");
//   } 
  
// }
// console.log(capitalFirstLetter(input || "ashdjahsd asdhyahsyd yas"))

// Q12
// var input =prompt("Enter a input");
// function capitalFirstLetter(str){
//   console.log(str);
//   var wordSplit = str.split(" ");
//   console.log(wordSplit);
//   var maxLength =wordSplit[0];
//   for(var i=1; i<wordSplit.length;i++){
//     var word = wordSplit[i];
//     if(maxLength.length< word.length){
//       maxLength=word;
      
//     }
    
//     // return wordSplit.join(" ");
//   } 
//   return maxLength
// }
// console.log(capitalFirstLetter( input||"ashdjahsd asdhyahsyd yas fffffffff"))


// Q13
//  const letterCount = (str , letter)=>{
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === letter ){
//             count ++ ;
//         }
        
//     }
//     return "leter = " + count

//  }

// console.log(letterCount("hello world",'o'))



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// Answer

// var radius = 10
// var pi  = 3.142;

// function calcCircumference(radius){
//     const result = 2*pi*radius 
//     return result 

// }

// function calcArea(radius){
//     const result = pi*Math.pow(radius,2)
//     return result 

// }

// console.log(calcCircumference(radius))
// console.log(calcArea(radius))



// Assignment 43 - 48  

// const main =  document.querySelector('.main')


//  Q1
// const head = document.createElement('a')
// head.setAttribute('href','#')
// const text = document.createTextNode('photopea')
// head.appendChild(text)
// // main.innerHTML = '';
// main.appendChild(head);
// head.addEventListener('click',()=>{
//     alert("Hello Sir")
// } )

//  Q2

// let imges = ['https://m.media-amazon.com/images/I/51nb43yXOFL.jpg','https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SEbQm6zUL.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh9zT_B6o2I1EXKPiiWLV27jALzDq7anl63baEt1ldoIISvWvDIyLDfNTWZJ7FAAhgEg&usqp=CAU','https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-5.jpg']

// for (let i = 0; i < imges.length; i++) {
//     const head = document.createElement('img')
// head.setAttribute('src',imges[i])
// head.setAttribute('class','img')
// head.setAttribute('onclick','imgItem(this)')
// main.appendChild(head);
// }

// function imgItem(item){
//     alert('This item is added')
// }


//  Q3
// const main =  document.querySelector('.main')

// let input  = [{name:"john" , class: "10"},{ name: "Alice", class: "9" },{ name: "Bob", class: "11" },{ name: "Emily", class: "8" },{ name: "Peter", class: "12" },{ name: "Sara", class: "10" },{ name: "David", class: "9" },{ name: "Emma", class: "11" }, { name: "Alex", class: "8" }, { name: "Alex", class: "8" }]
// let headingValue = ['Index', 'Name' , 'Class' ]
// var ul =  document.createElement("ul")
// var li =  document.createElement("li")

// for (let j = 0; j < headingValue.length; j++) {
    
// var spanCreate =  document.createElement("span")
// var spanValue =  document.createTextNode(headingValue[j] )
// spanCreate.appendChild(spanValue)
// li.appendChild(spanCreate)
// main.appendChild(li)
// li.style.listStyle = "none"
// }

// function create(){

// for (let i = 0; i < input.length; i++) {
//     var li1 =  document.createElement("li")
//     var liText = document.createTextNode([i]+" "+input[i].name +" "+input[i].class+" ")
//     let del = document.createElement('button')
//     let delTex =  document.createTextNode('Delete')
//     del.setAttribute('onClick', `delList(${i})`)
//     del.appendChild(delTex)
//     li1.appendChild(liText)
//     li1.appendChild(del)
//     ul.appendChild(li1)
//     main.appendChild(ul)
//     li1.style.listStyle = "none"
    
// }
// }
// create();

// const delList =(item)=>{
//     input.splice(item,1)
//     ul.innerHTML = ""
//     create()
// }


//  Q4

// let imges = ['https://m.media-amazon.com/images/I/51nb43yXOFL.jpg','https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SEbQm6zUL.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh9zT_B6o2I1EXKPiiWLV27jALzDq7anl63baEt1ldoIISvWvDIyLDfNTWZJ7FAAhgEg&usqp=CAU','https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-5.jpg']


//     const head = document.createElement('img')
// head.setAttribute('src',imges[0])
// head.setAttribute('class','img')
// head.setAttribute('onmouseover','imgItem(this)')
// head.setAttribute('onmouseout','imgItemOut(this)')
// main.appendChild(head);


// function imgItem(item){
//     item.src= imges[1]
    
// }

// function imgItemOut(item){
//     item.src= imges[0]
    
// }


// Q5 

// let increaseButton =  document.createElement('button')
// let counter =  document.createElement('h1')
// let decreaseeButton =  document.createElement('button')

// let count =0;

// let increaseButtonText = document.createTextNode('Increase')
// increaseButton.appendChild(increaseButtonText)

// counter.innerHTML = count ;

// let decreaseButtonText = document.createTextNode('Decrease')
// decreaseeButton.appendChild(decreaseButtonText)

// main.style.display = 'flex'
// main.style.height = '100vh'
// main.style.justifyContent = 'center'
// main.style.alignItems = 'center'

// main.appendChild(decreaseeButton)
// main.appendChild(counter)
// main.appendChild(increaseButton)

// increaseButton.setAttribute('onclick','increaseCount()')
// decreaseeButton.setAttribute('onclick','decreaseCount()')


// function increaseCount(){
//     count++
//     counter.innerHTML = count ;
// }
// function decreaseCount(){
//     count--
//     counter.innerHTML = count ;
// }


// Assignment 49 - 52  
const main =  document.querySelector('.main')

// Q1
// function createItems(){
// main.innerHTML=`<div class="formCreate">
// <h1>Signup Form</h1>
// <form>
//   <label for="firstName">First Name:</label>
//   <input type="text" id="firstName" required="required"><br>

//   <label for="lastName">Last Name:</label>
//   <input type="text" id="lastName" required="required"><br>

//   <label for="email">Email:</label>
//   <input type="email" id="email" required="required"><br>

//   <label for="password">Password:</label>
//   <input type="password" id="password" required="required"><br>

//   <button type="button" onclick="signUp()">Sign Up</button>
// </form>
// </div>`
// }
// createItems()
// function signUp(){
//     let firstName =  document.getElementById('firstName')
//     let lastName =  document.getElementById('lastName')
//     let email =  document.getElementById('email')
//     let password =  document.getElementById('password')
//     let button =  document.getElementsByTagName('button')
//     console.log(button)
//     main.innerHTML=`   <div class="displayItems">
//     <h3>FirstName: ${firstName.value}</h3>
//     <h3>LastName: ${lastName.value}</h3>
//     <h3>Email: ${email.value}</h3>
//     <h3>Password: ${password.value}</h3>
//     <button type="button" onclick="createItems()">Back to home page</button>
// </div>
// </div>`
   
// }


// Q2

main.innerHTML = `  <div style="width: 400px;">
<h2>Item Title</h2><br>
<p>Lorem paragraph</p><br>
<div id="itemDetails" class="item-details">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta amet iste quod impedit alias! Eius nobis quam quia, iure quod architecto iste vero dolor adipisci ipsum assumenda, nihil aliquid aut magnam obcaecati soluta deleniti eos accusantium dolores perferendis veniam maiores quae. Nisi repudiandae doloribus beatae. Sint, quaerat, beatae, adipisci architecto sapiente magnam voluptatum dolores modi ut nemo ducimus perspiciatis non laudantium est mollitia rem vitae! Atque nostrum dicta, dolorum consequatur accusamus ipsa deserunt quibusdam nesciunt aliquid facere iure. Aliquam officiis quidem, incidunt omnis quisquam necessitatibus voluptas sequi itaque fuga ullam? Eligendi assumenda corporis rem sunt? Alias incidunt distinctio culpa sequi cumque quod tenetur accusamus in eveniet, magnam suscipit deleniti eos modi nemo facere unde dicta explicabo, vel minus nam! Autem est, odit, error nesciunt nobis at, rem quod inventore harum tempore nostrum. Sunt, alias eos a voluptatum rem commodi corrupti, veritatis soluta facere illum ducimus aliquam fugit officiis, deleniti tempore! Molestiae quaerat minima asperiores, provident maxime id cupiditate quod at ducimus sunt tempora quas! Aliquam harum necessitatibus, consequuntur sit minima, consequatur eligendi velit rem, cumque neque illum assumenda tempore molestias? Impedit natus harum doloribus inventore, excepturi necessitatibus dolores reprehenderit error blanditiis, veniam delectus quae. Corporis numquam delectus consectetur iusto cum.
  </p>
  
</div>
<button id="readMoreBtn" onclick="Details()">Read more</button>
</div>`

let itemdetails = document.querySelector('#itemDetails')
let readMoreBtn = document.querySelector('#readMoreBtn')
console.log(itemdetails)
itemdetails.style.display = 'none'

function Details(){
    if(itemdetails.style.display === 'none'){
        itemdetails.style.display = 'block'
        readMoreBtn.innerHTML = 'Read less'
    }
    else{
        itemdetails.style.display = 'none'
        readMoreBtn.innerHTML = 'Read more'
    }
}