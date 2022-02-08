//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//unction number (a,b){
  //  let res = a * b;
   // return res;}
//console.log(number(20,30))
// - створити функцію яка обчислює та повертає площу круга
//function colo(r){
  //  let radius= r** 2 ;
   // let col =3.14 *radius
   // return col;
//}
//console.log(colo(20))
//- створити функцію яка приймає масив та виводить кожен його елемент
//let mas =[22,34,1991,123,'kak','to','tak'];
//function room (mas){
  //  for (let i = 0 ;i <mas.length; i++){
   //     document.write(mas[i])
   // }
//}
//console.log(mas)
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//function creat(bad){
 // document.write(`<ul>`)
   // document.write(`<li>${bad}</li>`)
    //document.write(`<li>${bad}</li>`)
   // document.write(`<li>${bad}</li>`)
   // document.write(`</ul>`)
//}
//creat('bad')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function  number (a,b){
  let res = a * b;
 return res;}
console.log(number(20,30))
// - створити функцію яка обчислює та повертає площу круга
function colo(r){
  let radius= r** 2 ;
 let col =3.14 *radius
 return col;
}
console.log(colo(20))
//- створити функцію яка приймає масив та виводить кожен його елемент
let mas =[22,34,1991,123,'kak','to','tak'];
function room (mas){
  for (let i = 0 ;i <mas.length; i++){
     document.write(mas[i])
 }
}
console.log(mas)
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function creat(bad){
 document.write(`<ul>`)
 document.write(`<li>${bad}</li>`)
document.write(`<li>${bad}</li>`)
 document.write(`<li>${bad}</li>`)
 document.write(`</ul>`)
}
creat('bad')

// - створити функцію яка обчислює та повертає площу круга
function colo(r){
  let radius= r** 2 ;
 let col =3.14 *radius
 return col;
}
console.log(colo(20))
//- створити функцію яка приймає масив та виводить кожен його елемент
let mas =[22,34,1991,123,'kak','to','tak'];
function room (mas){
  for (let i = 0 ;i <mas.length; i++){
     document.write(mas[i])
 }
}
console.log(mas)
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function  createelementt (text,number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++)
    {
        document.write( `<li>${text}</li>`);

    }
    document.write(`</ul>`);
}
createelementt('hello',3)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let  newmass=[ {id:1 ,name:'Bob' ,age:20},{id:2, name:'Ben' ,age:35},{id:3 ,name:'Jek',age: 50}];
function obiekt(mas) {
    for (const element of mas) {
        document.write(`<div>${element.id}.${element.name} - ${element.age} </div>`)

    }
}
    obiekt(newmass)






