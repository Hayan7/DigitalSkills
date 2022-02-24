//window and document

/* var res = document.querySelector('.container')
const myImage = document.createElement('img')
myImage.setAttribute('src','https://picsum.photos/id/237/200/300')
res.append(myImage) */
/* const g = t=>document.createElement(t)
 const jumbotron = g('div')
 jumbotron.classList.add('jumbotron')
 jumbotron.classList.add('jumbotron-fluid')
 jumbotron.classList.add('bg-dark')
 jumbotron.classList.add('text-light')

 const container = g('div')
 container.classList.add('container')

 const title = g('h1')
 title.classList.add('display-1')
 title.innerText = "Fluid jumbo heading"

 const para = g('p')
 para.classList.add('lead')
 para.innerText = "Jumbo helper text"

 const hr_element = g('hr')
 para.classList.add('my-2')
 para.innerText = "Jumbo helper text"


 container.append(title)
 container.append(para)
 container.append(hr_element)

 jumbotron.append(container)
 document.body.append(jumbotron)

const Table_new = g('table')
const tr1 = g('tr')
const th1 = g('th')
th1.innerText = "Company"
const th2 = g('th')
th2.innerText = "Contact"
const th3 = g('th')
th3.innerText = "Country"

const tr2 = g('tr')
const d1 = g('td')
d1.innerText = "Alfreds Futterkiste"
const d2 = g('td')
d2.innerText = "Maria Anders"
const d3 = g('td')
d3.innerText = "Germany"

const tr3 = g('tr')
const d4 = g('td')
d4.innerText = "Centro comercial Moctezuma"
const d5 = g('td')
d5.innerText = "Francisco Chang"
const d6 = g('td')
d6.innerText = "Mexico"

Table_new.append(tr1)
tr1.append(th1)
tr1.append(th2)
tr1.append(th3)
Table_new.append(tr2)
tr2.append(d1)
tr2.append(d2)
tr2.append(d3)
Table_new.append(tr3)
tr3.append(d4)
tr3.append(d5)
tr3.append(d6)
document.body.append(Table_new) */
const cardBody = document.querySelectorAll('.card-body')

const [appHeader, appBody] = cardBody

const listGroup = document.querySelector('.list-group')

const [addButton,deleteAllTodos] = document.querySelectorAll('button')



var html = `

<li class="list-group-item d-flex justify-content-between">

JS is Cool!!!!

<a href="#" class="delete-item">

    <i class="fa fa-remove"></i>

</a>

</li>`

/*const res = document.createElement('li')
res.classList.add('list-group-item')
res.classList.add('d-flex')
res.classList.add('justify-content-between')
res.innerText = "Todo list"*/
/* let  arra = ['list-group-item','d-flex','justify-content-between']
function addItem() {
    const res = document.createElement('li')
    arra.forEach(element => {
        res.classList.add(element)
    });
    res.innerText = 
    "Todo list"
    listGroup.append(res)
}
//addItem()
// js events

 addButton.addEventListener('click',function(e){

    e.preventDefault();
    addItem();
    //console.log('hello click')
    
}) */


 