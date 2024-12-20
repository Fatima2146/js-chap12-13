/////////\\\\\\\\\-------- QUESTION 2. -----------\\\\\\\\\\\\\\\\\\\\\//////////

const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));
if (num1 === num2) {
 document.write("The two integers are equal.");
}
 else {
  if (num1 > num2) {
    document.write(num1, 'is larger.')
  } 
  else {
    document.write(num2, 'is larger.')
  }
}

/////////\\\\\\\\\-------- QUESTION 3. -----------\\\\\\\\\\\\\\\\\\\\\//////////

let num = parseInt(prompt("enter a number"));
if(num<0){
  document.write("The number is negative")
}
else{
  document.write("The number is positive")
}

/////////\\\\\\\\\-------- QUESTION 4. -----------\\\\\\\\\\\\\\\\\\\\\//////////

let char = prompt("Enter a character");
let vowels = ['a','e','i','o','u'];
if( char.length  && vowels.includes(char)){
  document.write("true")
}
else{
  document.write("false")
}

//////////\\\\\\\\\-------- QUESTION 5. -----------\\\\\\\\\\\\\\\\\\\\\//////////

let user = prompt("enter a password?")
let pass = ("ayesha-2146");
if(user==""){
  document.write("Please enter your password!!")
}
else if(pass===user){
  document.write("correct password")
}
else{
  document.write("incorrect password!!")
}

//////////\\\\\\\\\-------- QUESTION 6. -----------\\\\\\\\\\\\\\\\\\\\\//////////

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

//////////\\\\\\\\\-------- QUESTION 7. -----------\\\\\\\\\\\\\\\\\\\\\//////////


var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
time = parseInt(time);
if (time >= 0 && time < 1200) {
    document.write("Good Morning");
}
 else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon");
}
 else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
}
 else if (time >= 2100 && time <= 2359) {
    document.write("Good Night");  
} 
else {
    document.write("Invalid time entered.");
}
