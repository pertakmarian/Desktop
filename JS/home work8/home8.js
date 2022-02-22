
//- Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"
//-- отримує текст з блоку з id "rules"
//-- замініть текст параграфа з id 'content' на будь-який інший
//-- замініть текст параграфа з id 'rules' на будь-який інший
//-- змініть кожному елементу колір фону на червоний
//-- змініть кожному елементу колір тексту на синій
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
//-- поміняти колір тексту у всіх елементів fc_rules на червоний

//-- отримує текст з параграфа з id "content"
 let conten =document.getElementById('content')
console.log(conten)

//-- отримує текст з блоку з id "rules"
let rules =document.getElementById('rules')
console.log(rules)

//-- замініть текст параграфа з id 'content' на будь-який інший
conten.innerHTML= '<p>qwe zxc iop</p>'

//-- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML='<h1>колір тексту у всіх елементів</h1>'

//-- змініть кожному елементу колір фону на червоний
let begraund =document.body.children
for (const Element of begraund) {
 Element.style.background='red'
}
//-- змініть кожному елементу колір тексту на синій
let color =document.body.children
for (const colors of color) {
 colors.style.color='blue'

}
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
let idrules=document.getElementById('rules')
console.log(idrules)

//поміняти колір тексту у всіх елементів fc_rules на червоний

let fcrule=document.getElementsByClassName('fc_rules')
for (const fcElement of fcrule) {
 fcElement.style.color ='yellow'
}