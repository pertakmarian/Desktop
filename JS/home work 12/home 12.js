// //  1.
//  // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// //  Для кожного елементу свій блок div.post
// //  Всі характеристики повинні мати свої блоки всередені div.post
// //  https://jsonplaceholder.typicode.com/posts

//fetch('https://jsonplaceholder.typicode.com/posts')
  //.then( response =>{
   //  return  response.json()
  //})
    //.then(posts=> {
       // let wrap =document.createElement('div')
   // wrap.classList.add('wrap')
     //  for (const post of posts) {
         //   let card =document.createElement('div')
          //  card.classList.add('post')
          //  card.innerHTML =`
          //  <h3>ID :${post.id}</h3>
           // <h4>Title:${post.title}</h4>
          //  <h5>Body:${post.body}</h5>
         //  `
         //  wrap.appendChild(card)
          //  document.body.appendChild(wrap)
       // }
  //  })

// //  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //      Для кожного елементу свій блок div.comment
//  // Всі характеристики повинні мати свої блоки всередені div.comment

fetch('https://jsonplaceholder.typicode.com/comments')
.then (response => response.json())
.then(comments =>{
    let wrap =document.createElement('div')
    wrap.classList.add('wrap')
    for (const comment of comments) {


        let card = document.createElement('div')
        card.classList.add('comment')
        card.innerHTML = `
        <h3>ID ${comment.id}</h3>
        <h4>Name ${comment.name}</h4>
        <h5>Email ${comment.email}</h5>
        <h6>Body ${comment.body}</h6>
        `
        wrap.appendChild(card)
        document.body.appendChild(wrap)


    }
})