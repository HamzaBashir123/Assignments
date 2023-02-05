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

var username = "Hamza123";
// Q2
var myName = "Jhone Doe";
// Q3
var message = "Hello World";

// alert(message)

// Q4
var age = "15 years old";

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
var age = 20;
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
// var result= --a - --b + ++b + b--;
// --a; // first -1 then value print, the value of a = 1
// --a - --b ; // a= -1+1   - -1+1  = 0 ;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write(`a is  ${a} </br>`)
// document.write(`b is  ${b} </br>`)
// document.write(`result is  ${result} </br>`)

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
// ////////////////////////////////////////////// Confusion

// if (true){
//     alert("True");
// }
// if (false){
//  alert("False");
// }
//  //////////////////////////////  Confusion
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


