// fetch api
// JSON Javascript Object Notation
// API > Application Interface

// base api url https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts
// <li class="list-group-item">And a fifth one</li>

const listGroup = document.querySelector('.list-group')
function ConvertToJson(response){
    return response.json()
}


function addToUi(obj){
    const el = document.createRange().createContextualFragment(`<li class="list-group-item">${obj.email}</li>`)
    listGroup.innerHTML += `<li class="list-group-item">${obj.email} ${obj.name} ${obj.body}</li>`
}

function GetJsonData(data){
    console.log(data)
    data.forEach(comment=>{
        console.log(comment)
        addToUi(comment)
    })
    return data
}

fetch('https://jsonplaceholder.typicode.com/comments/')
.then(ConvertToJson)
.then(GetJsonData)