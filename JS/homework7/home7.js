// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone

}

//}
//створити пустий масив, наповнити його 10 об'єктами new User(....)
let usermass =[
    new User(12, 'petya', 'pyato4kin', 'aramba@gmail.com', 380639030215),
    new User(11, 'kolya', 'konanenko', 'asdba@gmail.com', 380639043215),
    new User(15, 'andriy', 'bontey', 'asnca@gmail.com', 380639030326),
    new User(18, 'yulia', 'ilkiv', 'dsdmba@gmail.com', 380639030435),
    new User(16, 'andriy', 'pyatov', 'rtreba@gmail.com', 380639030236),
    new User(22, 'tolik', 'anabolik', 'trerf@gmail.com', 380639030876),
    new User(19, 'stepan', 'yzviak', 'nvjds@gmail.com', 380639033855),
    new User(17, 'yura', 'vushka', 'jsjdjf@gmail.com', 380639054325),
    new User(20, 'bogdan', 'payk', 'afdera@gmail.com', 380639548956),
    new User(21, 'roman', 'moroz', 'fkdlfa@gmail.com', 380639030990),


]
 //   - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(usermass)
let filterUser =usermass.filter((item) => {
    if (item.id % 2===0 ){
        return item

     }
})
console.log(filterUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usermass.sort((a,b) =>a.id-b.id))

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class  Client {
    constructor(id, name, surname, email, phone, order)  {
   this.id= id ;
   this.name=name  ;
   this.surname=surname;
   this.email=email;
   this.phone=phone ;
   this.order=order;
}
}
 