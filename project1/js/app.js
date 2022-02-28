

const [bookName, author, borrowDate, price] = document.querySelectorAll('input')
const selectOption = document.getElementById('book_category')
const [addButton,deleteButton] = document.querySelectorAll('button') 
const listgroup = document.querySelector('.filling-table')
// const addTr = document.createElement('<tr>')
// const endTr = document.createElement('</tr>')
// const addTd = document.createElement('<td>')
// const endTd = document.createElement('</td>')
function makeList(data){
    const TodoModel = `
                            <td>${data.name}</td>
                            <td>${data.auth}</td>
                            <td>${data.select}</td>
                            <td>${data.date}</td>
                            <td>${data.prijs} <i class="fa fa-eur" aria-hidden="true"></i></td>
                            <td><a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a></td>
    `
    const ModelRendered = document.createRange().createContextualFragment(TodoModel)

    //console.log(ModelRendered)
    listgroup.append(ModelRendered)
}
addButton.addEventListener('click', (e)=>{
    e.preventDefault()
    //console.log(bookName.value)
    makeList({
        name: bookName.value,
        auth: author.value,
        select: selectOption.value,
        date: borrowDate.value,
        prijs: price.value

    })
})