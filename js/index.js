function addItem(){
    let itemButton = document.querySelector( 'button' );
    itemButton.addEventListener( 'click', ( event ) =>{
        let item = document.querySelector( 'input' );
        event.preventDefault();
        if (item.value != '') {
            let results = document.querySelector( '.results' );
            let ul = results.querySelector('ul')
            let li = document.createElement('li');
            li.innerHTML =
                `
                <div class="item-container" id ="${item.value}" >
                    <div class="item-text">${item.value}</div>
                        <div class="item-buttons">
                            <button class="check-btn" id ="${item.value}">Check</button>
                            <button class="delete-btn" id ="${item.value}">Delete</button>
                        </div> 
                </div>
            `; 
            ul.appendChild(li);
            item.value = ''
        } else {
            alert("Ingresa un producto")
        }
    })
    checkItem();
    deleteItem();
};
  
function checkItem(){
    let ulCheck = document.querySelector( 'ul' );
    ulCheck.addEventListener('click',(event) => {
        if (event.target.classList.contains('check-btn')) {
            let idItem = event.target.id;
            // console.log(event.target.classList)
            let container = document.getElementById(idItem);
            container.getElementsByClassName("item-text")
            let text = container.getElementsByClassName("item-text")[0].style.cssText
            
            if (text != 'text-decoration: line-through;') {
                container.getElementsByClassName("item-text")[0].style.setProperty('text-decoration', 'line-through');
            } else {
                container.getElementsByClassName("item-text")[0].style.setProperty('text-decoration', 'none');
            }
        }
    })
};

function deleteItem(){
    let ulDelete = document.querySelector( 'ul' );
    ulDelete.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            let idItem = event.target.id;
            //console.log(ulDelete)
            let liDelete = ulDelete.querySelectorAll('li')
            var idLocation;
            for (var i = 0; i < liDelete.length; i++) {            
                if (liDelete[i].lastChild.previousSibling.attributes.id.value == idItem) {
                    idLocation = i;
                }
            }
            ulDelete.removeChild(liDelete[idLocation]);  
        }
    })
};

function init(){
    addItem();
    // checkItem();
    // deleteItem();
};
  
init();
