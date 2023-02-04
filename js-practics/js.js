// function assignmentAvarege(assignment1mark, assignment2mark, assignment3mark){
//     var total = assignment1mark + assignment2mark + assignment3mark;
//     var avarage = total / 3;
//     return avarage;
// }
// const assignment1mark = 60;
// const assignment2mark = 60;
// const assignment3mark = 14;

// var result = assignmentAvarege(assignment1mark, assignment2mark, assignment3mark);
// console.log( result);

// ----------------------------------------

// function myFunction(input) {
//     if (input > 10) {
//         var result = input*2;
//     }
//     if (input < 10) {
//         var result = input+2;
//     }
//     return result

// }
// var ami = myFunction(22)
// console.log(ami);

// --------------------------------------------

// function oddNumSum(x){
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         const element = x[i];
//         if (element %2 != 0) {
//             sum = sum + element;
//         }

//     }
//     return sum
// }
// const numbers = [3,3,3,4,6,];
// let result = oddNumSum(numbers);
// console.log(result);


// -----------------------------------------------
// ------Count the number of all zero-------
// function countZeros(binary_num ) {
//     let count = 0;
//     for (let i = 0; i < binary_num.length; i++) {

//       if(binary_num[i] == "0"){
//         count++;
//       }
//     }
//     return count
// }
// var total =  countZeros("10101");
// console.log(total);
// ------------------------------------------------
//--------- Find the area of a rectangle-----------

// function findArea( length, width ) {
//   const total = length * width;
//   return total
// }
// const result = findArea(10 , 5);
// console.log(result);
// --------------------------------------------------









// ---------------------------------------
// function add(a, b){
//   return  a + b;
// }
// var kh = add('ADAM' + 'EVE', 322);
// console.log(kh)
// document.addEventListener('click', function () {
//    document.querySelectorAll(".x8gbvx8 .x9f619 .x1i10hfl ").forEach(function(x){
//     x.addEventListener('click',function(e){
//       clicked == true;
//     })
//   })
// })








// Classic Heron's Formula:
// s = (a+b+c)/2 = 6
// Area = √( s(s-a)(s-b)(s-c) )
// Area = 6

// Math.sqrt()

// function triangleArea(a,b,c) {
//   const s = (a+b+c)/2;

//   const rea = Math.sqrt(Math.abs(s*(s-a)*(s-b)*(s-c)));
//   return rea;
// }
// const area = triangleArea(4,5,3);
// console.log(area);
// 



// *******************************---------------- 

// 23_5-2 Simple Problem solving

// *******************************----------------


// const onlyPositive = [23,43,1,3,2,-4,3,2,65,4,];
// for (let i = 0; i < onlyPositive.length; i++) {
//     const element = onlyPositive[i];
//     if(element < 0){
//         break
//     }
//     console.log(element);
// }

// const bestFriends = ['khalid', 'monir', 'kakon ahmned', 'amar mama onek boro maper manush', 'mahdi hasan jr'];

// function bestFriend(bestFriends) {
//     let friendCharacterLength = bestFriends[0].length;
//     let bestFriend = 0;

//     for (let i = 0; i < bestFriends.length; i++) {
//         const friend = bestFriends[i];
//         if (friendCharacterLength < friend.length) {
//             friendCharacterLength = friend.length;
//             bestFriend = friend;
//         }
//     }
//     return bestFriend;
// }

// const result = bestFriend(bestFriends);
// console.log(result);

// function paperRequirments (book1, book2 , book3){
//     const needPaperForbook1 = 100;
//     const needPaperForbook2 = 200;
//     const needPaperForbook3 = 300;

//         const CalculateBook1 = needPaperForbook1 * book1;
   
//         const CalculateBook2 = needPaperForbook2 * book2;

//         const CalculateBook3 = needPaperForbook3 * book3;
    
//     const total = CalculateBook1 + CalculateBook2 + CalculateBook3;
//     return total;
// }
// const result = paperRequirments(1,1,1);
// console.log(result);

// ----------------------------------------------
// function centimeterToMeter(centimeter) {
//     return centimeter / 100;
// }
// ----------------------------------------------
// const total = centimeterToMeter(103)
// console.log(total);


// function feetToInch(feet) {
//     return feet*12;
// }
// const total = feetToInch(103)
// console.log(total);