let url = 'https://jsonplaceholder.typicode.com/posts';


            fetch(url)
            .then(json => json.json()).then(data => 
                {
                    var div = document.getElementById('tbody');
                    for (let index = 0; index < data.length; index++) {
                        let tdElement = document.createElement('td')
                        var trElement = document.createElement('tr')
                        div.appendChild(trElement)
                        tdElement.innerHTML = data[index].userId
                        trElement.appendChild(tdElement)

                        let tdElement1 = document.createElement('td')
                        tdElement1.innerHTML = data[index].id
                        trElement.appendChild(tdElement1)

                        let tdElement2 = document.createElement('td')
                        tdElement2.innerHTML = data[index].title
                        trElement.appendChild(tdElement2)

                        let tdElement3 = document.createElement('td')
                        tdElement3.innerHTML = data[index].body
                        trElement.appendChild(tdElement3)
                    }
                })