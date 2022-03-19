const txtareaElement = document.querySelector("textarea")
const usrnameElement = document.querySelector("input")

txtareaElement.addEventListener("keyup", (event) =>{
    if (event.key === "Enter") {
        user = {
            username : usrnameElement.value,
            Comment: txtareaElement.value
          }
          //console.log(user)
          fetch('http://localhost:3000/students/',{
          method:'post',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      })
    }
})