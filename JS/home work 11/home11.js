// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let f1=document.forms.f1
f1.onsubmit =function (e){
   e.preventDefault()
let nameinput =e.target.username.value
    let ageinput2 =e.target.age.value
let user ={nameinput,ageinput2}
    localStorage.setItem(nameinput,JSON.stringify(user))

}
 //-створити форму з інпутами для model,type та volume автівки.
  //   при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carsArray=JSON.parse(localStorage.getItem('cars'))|| [];

document.forms.carform.onsubmit=function (e){
    e.preventDefault()
  let model=  e.target.model.value
   let type= e.target.type.value
  let volume=  e.target.volume.value
let car ={model,type,volume}
carsArray.push(car)
    localStorage.setItem('cars',JSON.stringify(carsArray))
}


