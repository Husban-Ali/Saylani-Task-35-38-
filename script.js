/**
 * !Chapter 35-38
 */


// var date = new Date();
// console.log(date)

// function name(a,b){
// name = a+b;
// return name
// }
// var a = prompt("First Name")
// var b = prompt("Second Name")

// document.write(name(a,b))

//  function sum(){
//     sum = a+b;
//     return sum;

//  }

function cal(a,b,c){
    a = +prompt("Enter First Number")
    b = +prompt("Enter Second Number Number")
    c = prompt("Enter Operator (e.g + ,- ,* ,/)")

    if(c==='+'){
        var add = a+b;
      alert(add)
    }
    else if(c==='*'){
        alert(a*b)
      }
      else if(c==='-'){
        alert(a-b)
      }
      else if(c==='/'){
        alert(a/b)
      }
      else{
        alert("Error! You have put wrong operator")
      }

}
cal()
 
 
// function square(number){
//     var number;
//     return number * number 
// }
 
//   console.log(square(5))


// function facto(a){
//     if (a===0){
//     return 1;     
//     }
//     else {
//         return a*facto(a-1)    
//     }
//  }
//  var result = facto(6)
//  console.log(result)

// function count(a,b){
// var a = prompt("Enter First Number")
// var b = prompt("Enter Second Number")

// for(let i=a; i<=b; i++){
// document.write(i , "<br>")
// }
// }
// document.write(count())

// function hypotenuse(a,b){
// function square(c){
//     return (c*c)
// }
// return square(a)+square(b)
// }

// console.log(hypotenuse(2,4))
// function area(a,b){
// return a*b
// }
// console.log(area(3,3))
// function palindrome(str){
//     var new1 = reversestr
// return new1;
    


// // for(var i=4; i>=1; --i){
// //     for(var j=0; j<=4;++j){

// //         word[i]=word[j]
// //     }

// }
// function palindrome(str){
//     str= prompt("Enter Word")
//     const reversedstr = str.split('').reverse().join('')
//    if(str==reversedstr){
//     document.write("The given word is palindrome")
//    }
//    else{
//     document.write("Not a palindrome")
//    }
// }
// palindrome()

// function capitalise(str1){

// var str1 = prompt('write your sentence')
// const arr = str1.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }



// const str2 = arr.join(" ");
// document.write(str2)}


// capitalise();

// function geometrizer(radius)
// {
//     var radius = prompt("Enter Radius of Circle")
    
//         new1= (radius*radius)*3.14;
//         document.write("Area Of circle is",new1,"<br>")
        
//         new2= 2*3.14*radius;
//         document.write("Circumference Of circle is",new2)
// }
// geometrizer()

