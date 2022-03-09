// http request (get)

fetch('http://localhost:3000/students')
.then(res=>res.json())
.then(data=>{
  //  console.log(data)
})

// get by id

fetch('http://localhost:3000/students/1')
.then(res=>res.json())
.then(data=>{
  //  console.log(data)
})

// http post request

let newStudent ={
    id:4,
    name:"Michel",
    email:"micky@mmic.com",
    password:"1213121"
}

// fetch('http://localhost:4000/students/',{
//     method:'post',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newStudent)
// })

const postBtn = document.querySelector('.post')
const delBtn = document.querySelector('.delete')
const putBtn = document.querySelector('.update')

postBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/students/',{
    method:'post',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newStudent)
})
})

// delete request
delBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/students/4',{
        method:'DELETE'
    })
    .then(res=>console.log('deleted'))
})

let updatedStudentObject ={
    name:"Ali",
    email:"ali@mmic.com",
    password:"1213121"
}

// put request
putBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/students/3',{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedStudentObject)
    }).then(res=>res.json())
    .then(data=>console.log(`Student info updated\n ${data}`))
})