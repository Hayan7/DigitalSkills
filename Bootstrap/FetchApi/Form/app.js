// const registerbtn = document.querySelector('.post')
// const [fullName,emailAddress,Password] = document.querySelectorAll('input')
// const position = document.querySelectorAll('select')
// user = {
//   fullname : fullName.value,
//   emailaddress: emailAddress.value,
//   position : position[0].options[position[0].selectedIndex].text,
//   Password: Password.value
// }
// function handleSubmit(event) {
//   event.preventDefault();

//   //const data = new FormData(event.target)

//  const value = Object.fromEntries(user.entries())

//   console.log({ value })
// }
// const form = document.querySelectorAll('form');
//   form[0].addEventListener('submit', handleSubmit);
//var object = {};

//var json = JSON.stringify(object);
// registerbtn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     fetch('http://localhost:3000/students/',{
//     method:'post',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
// })
// })
//+++++++++
const form = document.getElementById("json");

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  const data = [...new FormData(this)]
  .reduce((a,[key,value])=>{
    a[key] = value;
    return a;
  }, {});
  
  fetch('http://localhost:3000/students/',{
    method:'post',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});
//+++++++++
// const getData = (id) => {
  //   const form = document.getElementById(id);
  //   const inputCollection = form.getElementsByTagName('input');
  //   const inputArray = [...inputCollection];
  //   const data = {};
  
  //   inputArray.map(input => {
  //     const { name, value } = input;
  //     const splitName = name.split('.');
  //     generateObj(data, splitName, value);
  //   })
  
  //   return data;
  // }
//   registerbtn.addEventListener('click',()=>{
//     fetch('http://localhost:3000/students/',{
//     method:'post',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(getData('json'))
// })
//})
// var fd = new FormData(document.forms[0]);

// fd.toJSON = function() {
//   const o = {};
//   this.forEach((v, k) => {
//     v = this.getAll(k);
//     o[k] = v.length == 1 ? v[0] : (v.length >= 1 ? v : null);
//   });
//   return o;
// };
// const data = new FormData(document.querySelector('form'));
// const json = JSON.stringify(Array.from(data).reduce((o,[k,v])=>(o[k]=v,o),{}));
// registerbtn.addEventListener('click', (e)=> {
//   e.preventDefault();
  
//   fetch('http://localhost:3000/students/', {
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(fd)
//   })
})