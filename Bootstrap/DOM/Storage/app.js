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

document.addEventListener('DOMContentLoaded', () => {
  let todos = GetTodosFromWebStorages();
  console.log(todos)
  todos.forEach(todo => {
      makeTodo(todo)
  })
})

function DeleteTodoFromStorage(todoTitle) {
  let todos = GetTodosFromWebStorages();
  todos.forEach(function(todo,index){
      if(todo.title === todoTitle.trim().toLowerCase()){
          todos.splice(index,1)

      }
  })
  localStorage.setItem('todos',JSON.stringify(todos))
}

function addTodoToArray(obj) {
  let temp = GetTodosFromWebStorages();
  console.log(obj)
  temp.push(obj)
  localStorage.setItem('todos', JSON.stringify(temp))
}

function GetTodosFromWebStorages() {
  let temp;
  if (localStorage.getItem('todos') === null) {
      temp = []
  } else {
      temp = JSON.parse(localStorage.getItem('todos'));
  }
  return temp;
}


function makeTodo(obj) {
  const TodoModel = `
  <li class="list-group-item d-flex justify-content-between">
  <p class="todotitle">${obj.title}</p>
  <p class="tododate">${obj.date}</p>
       <a href="#" class="delete-item">
       <i class="fa fa-remove"></i>
        </a>
</li>
  `
  const ModelRendered = document.createRange().createContextualFragment(TodoModel)

  // console.log(ModelRendered)
  listGroup.append(ModelRendered)
}

z.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(todoInput.value)
  // console.log(DateOfTodo.value)
  makeTodo({
      title: todoInput.value,
      date: DateOfTodo.value
  })

  addTodoToArray({
      title: todoInput.value,
      date: DateOfTodo.value
  })

  //
})


i.addEventListener('click', (e) => {
  e.preventDefault();
  //  console.log('hello')
  if (listGroup.childElementCount != 0) {

      while (listGroup.firstChild) {
          listGroup.removeChild(listGroup.lastChild)
      }
  } else {
      // console.log('There is no todo!')
  }
})

listGroup.addEventListener('click', (e) => {

  if (e.target.className === 'fa fa-remove') {
      // console.log('hello list group')
      // console.log(e.target.className)
      // console.log(e.target)
      // console.log(e.target.parentElement)
      // console.log(e.target.parentElement.parentElement)
      // console.log(e.target.parentElement.parentElement.textContent.trim().split(" ")[0])
      e.target.parentElement.parentElement.remove();
      DeleteTodoFromStorage(e.target.parentElement.parentElement.textContent.trim().split(" ")[0])

  }
})

TodoFilter.addEventListener('keyup', (event) => {
  const filterVal = TodoFilter.value.toLowerCase();
  //console.log(e.data)
  // console.log(filterVal)
  const listTodos = document.querySelectorAll('.list-group-item')
  listTodos.forEach(todo => {
      const todo_title = todo.children[0].textContent
      todo_title.indexOf(filterVal) === -1 ?
          todo.setAttribute('style', 'display:none !important')
          :
          todo.setAttribute('style', 'display:flex !important')
  })

})
