var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});

const [todoInput, DateOfTodo, TodoFilter] = document.querySelectorAll('input')
const [x, y, z, i] = document.querySelectorAll('button')
const listGroup = document.querySelector('.list-group')


function makeTodo(obj) {
    const TodoModel = `
    <li class="list-group-item d-flex justify-content-between">
    <p class="todotitle">${obj.title}</p>
    <p class="tododate">${obj.date}</p>
         <a href="#" class="delete-item">
         <i class="fa fa-remove "></i>
          </a>
</li>
    `
    const ModelRendered = document.createRange().createContextualFragment(TodoModel)
    console.log(ModelRendered)
    listGroup.append(ModelRendered)
} 
/*let  arra = ['list-group-item','d-flex','justify-content-between']
function addItem() {
    const res = document.createElement('li')
    
    arra.forEach(element => {
        res.classList.add(element)
    });
    const als = res.classList.add('a')
        als.classList.add('.delete-item')
    res.innerText = 
    "Todo list"
    listGroup.append(res)
}*/
z.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(todoInput.value)
    console.log(DateOfTodo.value)
    makeTodo({
        title: todoInput.value,
        date: DateOfTodo.value
    }) 
})


listGroup.addEventListener('click', (e) => {
    e.preventDefault();
  if (e.target.className == "fa fa-remove ") {
    console.log(e.target.className)
    e.target.parentElement.parentElement.remove()
  }
})
/* function filter(){
    if (TodoFilter.firstChild.innerText === listGroup.children.innerText) {
        console.log('test')
    }
} */
const existedListItems= document.querySelector('.list-group-item')
const buffer = new Array()
TodoFilter.addEventListener('keyup', (e) =>{
    const filtValue = TodoFilter.value.toLowerCase()
    console.log(filtValue)
    existedListItems.forEach(element => {
        const content = element.children[0].content
        content.indexOf(filtValue) === -1 ? element.setAttribute("style","display:none"):
        element.setAttribute("style","display:flex") 
        
    })
})
//buffer.forEach(element => console.log(element))
// i.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('hello')
//     if(listGroup.childElementCount !=0){

//         while(listGroup.firstChild){ 
//             listGroup.removeChild(listGroup.lastChild)
//         }
//     }else{
//         console.log('There is no todo!')
//     }
// })