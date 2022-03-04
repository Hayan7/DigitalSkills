const [book_name, book_author, book_releasedate, book_price] = document.querySelectorAll('input')
const book_category = document.querySelector('#book_category')
const [addBookBtn, removeBookBtn] = document.querySelectorAll('button')
const tablelist = document.querySelector('.table-dark')
const g = t => document.createElement(t)
function makeBookElement(obj) {
    let tr = g('tr')
    let id = g('td')
    id.setAttribute('scope',1)
    let book_name = g('td')
    book_name.innerHTML = obj.book_name
    let book_author = g('td')
    book_author.innerHTML = obj.book_author
    let book_category = g('td')
    book_category.innerHTML = obj.book_category
    let book_releasedate = g('td')
    book_releasedate.innerHTML = obj.book_releasedate
    let book_price = g('td')
    book_price.innerHTML = obj.book_price
    let bookPriceIcon = g('i')
    bookPriceIcon.className="fa fa-eur"
    bookPriceIcon.setAttribute('aria-hidden',true)
    let book_remove = g('td')
    let book_remove_a = g('a')
    book_remove_a.href="#"
    let book_remove_i = g('i')
    book_remove_i.className="fa fa-trash lead"
    book_remove_i.setAttribute('aria-hidden',true)
    book_remove_a.append(book_remove_i)
    book_remove.append(book_remove_a)
    book_price.append(bookPriceIcon)
    tr.append(id)
    tr.append(book_name)
    tr.append(book_author)
    tr.append(book_category)
    tr.append(book_releasedate)
    tr.append(book_price)
    tr.append(book_remove)
    
    return document.querySelector('tbody').append(tr)
}
document.addEventListener('DOMContentLoaded', ()=>{
 let books = GetTodosFromWebStorages()
 books.forEach(book => {
     makeBookElement(book)
 })
})
function addTodoToArray(obj) {
    let temp = GetTodosFromWebStorages();
    console.log(obj)
    temp.push(obj)
    localStorage.setItem('booklist', JSON.stringify(temp))
  }
  function GetTodosFromWebStorages() {
    let temp;
    if (localStorage.getItem('booklist') === null) {
        temp = []
    } else {
        temp = JSON.parse(localStorage.getItem('booklist'));
    }
    return temp;
  }

  tablelist.addEventListener('click', (e) => {

    if (e.target.className === 'fa fa-trash lead') {
        e.target.parentElement.parentElement.parentElement.remove();
        DeleteTodoFromStorage(e.target.parentElement.parentElement.parentElement.children[1].textContent.trim())
            //console.log(e.target.parentElement.parentElement.parentElement.children[1].textContent.trim())
    }
  })

  function DeleteTodoFromStorage(bookName) {
    let todos = GetTodosFromWebStorages();
    todos.forEach(function(todo,index){
        console.log(todo)
        if(todo.book_name.trim() === bookName.trim().toLowerCase()){
            todos.splice(index,1)
        }
    })
    localStorage.setItem('booklist',JSON.stringify(todos))
  }
  //===================
addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = {
        book_name: book_name.value,
        book_author: book_author.value,
        book_category: book_category.value,
        book_releasedate: book_releasedate.value,
        
        book_price: book_price.value
    }

    addTodoToArray({
        book_name: book_name.value,
        book_author: book_author.value,
        book_category: book_category.value,
        book_releasedate: book_releasedate.value,
        book_price: book_price.value
    })
    let makeBook = makeBookElement(obj)
})
//==========
removeBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(tablelist.children[1])
    if (tablelist.children[1].childElementCount != 0) {
        tablelist.children[1].remove()
    }
    localStorage.clear()
  })