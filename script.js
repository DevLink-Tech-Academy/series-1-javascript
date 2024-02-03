// console.log("hello world");
// let a = 4;
// console.log(a);
// //primitives and objects
// //Number,string,booleans
// //variables enbsures reusibality
// //numbers underscores dollarsign and letters
// //let tutorial = "devlinks";
// let tutorial = 5;
// let fat$pump = "hii";
// let personName = "Bayo";
// let firstname = "hello";
// let PI = 3.142;
// let first_name = "Bayo"; //snakECASING
// let firstName = "Bola";
// console.log(tutorial);
// console.log(tutorial);
// console.log(tutorial);
// console.log(tutorial);
// console.log(tutorial);
// console.log(tutorial);
// //Datatype
// //Values(Primitives or o
// //numbers,strings,boolean,undefined,null,symbol,bigint
// let firstNumber = 4.7; //number
// console.log(firstNumber);
// let newString = "89";
// console.log(newString);
// let firstBoolean = true;
// let secondBoolean = false;
// console.log(firstBoolean);
// console.log(secondBoolean);
// let firstUndefinedValue;
// // console.log(firstUndefinedValue);
// //undefined
// //67,098,787

// let thirdnum = 10000001;
// // let price = 50000000000001;
// console.log(typeof thirdnum);
// console.log(typeof firstUndefinedValue);
// //let/const/var
// //let const,var
// let value1 = "Hello";
// //console.log(value1);
// value1 = "im not greeting you";
// console.log(value1);
// //

// const unchangeableValue = "this value doesnt change";
// // unchangeableValue = "i must change you";
// console.log(unchangeableValue);
// var varValue = "3";
// varValue = "changed var value";
// console.log(varValue);
// let currentyear = 2024;
// const birthyear = 2020;
// let age = 4; //block scoped, var is function scoped
// currentyear = 2025;
// if (currentyear == 2025) age = 5;
// console.log(age);



// ///Operators In Javascript

// const x = 6;
// const y = '6';

// // ==
// // === 
// if(x === y){
//     console.log("Equal")
// }else{
//     console.log("Not Equal")
// }

// //This is a single line comment

// var

// var namex = prompt("Enter your details");
// if(namex != undefined){
//     alert('Hello ' + namex + " Welcome to DevLink tech Avademy");
// }
function validateAge(age){
    if(age >= 18){
        return true
    }else{
        return false;
    }
}

function handleSubmitSuccess(){
    let age =document.getElementById('age');
    let ageValidation = validateAge(age);

    if(ageValidation){
        alert('Welcome, we have been waiting for you');
    }else{
        alert("Ops!!! Sorry, you must be of 18 and above to register");
    }
}
