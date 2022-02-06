//1--створити масив з:
//  2  - з 5 числових значень
//3- з 5 стічкових значень
//-4 з 5 значень стрічкового, числового та булевого типу
//-5 та вивести його в консоль
//let  numbers =[12,22,65,35,67];
//let txt=['cat','dog','car','red','blue'];
//let all=['hello','user',22,true,false];
//console.log(numbers);
//console.log(txt);
//console.log(all);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let array=[]
//array [0]='bart';
//array [1]='simpson';
//array [2]=234 ;
//array [3]=12;
//console.log(array);
//document.write(array)


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrayall=[false,'hello',203,'menu',233,true,'marian',123,43,'car']
for (i=0; i <arrayall.length; i++) {
    if (typeof arrayall[i] === 'number','string','boolean') {
        console.log(arrayall[i])
   }


}

 //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arraytxtnumberbool= [false,'hi','misha',123,true,'red',12,1234,'blue',16]
for (i=0;i<arraytxtnumberbool.length;i++){
   if (typeof arraytxtnumberbool[i]=== 'string'){
        console.log(arraytxtnumberbool[i])
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let txtnumbol=[]
txtnumbol [0]=true;
txtnumbol [1]=234;
txtnumbol [2]='hello';
txtnumbol [3]=21;
txtnumbol [4]=false;
txtnumbol [5]='car';
txtnumbol [6]=34;
txtnumbol [7]='menu';
txtnumbol [8]=1991;
txtnumbol [9]='the end';
  for (i=o; i <10 ;i++){
     console.log(txtnumbol[i]);
  } ;

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i = 0; i < 10; i++ ){
    document.write(`<div>10 блоків ${i}</div>`)
};

 //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
while (u < 20) {
    document.write(`<h1> 20 блоків h1 </h1>`);
    u++;
};
 //-/ За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
while (u < 20) {
   document.write(`<h1> 20 блоків h1 ${u}</h1>`);
    u++;
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('krok' + i + ' ');
    document.write('krok' + i + ' ');

}
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log('krok' + i + ' ');
    document.write('krok' + i + ' ');}
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i+=2) {
    if (i %2===0)
    console.log('krok' + i + ' ');
    document.write('krok' + i + ' ');}