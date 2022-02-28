//Все робити за допомоги js.
//- створити блок,
let div=document.createElement('div')
//    - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')


//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//div.style.background='red'
//div.style.borderRadius ='2px'
//div.style.margin ='20px'
//- додати цей блок в body.
//document.body.appendChild('div')
//- клонувати його повністю, та додати клон в body.
//document.body.appendChild(div.cloneNode(true))

//- Є масив:
//    ['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.
//let itemmas=['Main','Products','About us','Contacts']
//let menu =document.getElementsByClassName('menu')[0]
//for (const item of menu) {
    //let li=document.createElement('li')
   // li.innerText=item
   // menu.appendChild(li)
//}console.log(itemmas)
//- Є масив
//let coursesAndDurationArray = [
   // {title: 'JavaScript Complex', monthDuration: 5},
   // {title: 'Java Complex', monthDuration: 6},
  //  {title: 'Python Complex', monthDuration: 6},
   // {title: 'QA Complex', monthDuration: 4},
  //  {title: 'FullStack', monthDuration: 7},
 //  {title: 'Frontend', monthDuration: 4}
//];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
//for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
   // let divitem= document.createElement('div')
   // divitem.innerText=`${course.title} ${course.monthDuration}`
   // document.body.appendChild(divitem)
   // console.log(divitem)
//}
