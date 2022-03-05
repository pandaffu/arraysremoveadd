let container = document.querySelector('.container');
const fruits = [];
const buttonAdd = document.getElementById('button-add');
const buttonRemove = document.getElementById('button-remove');


buttonAdd.addEventListener('click', addToArray);
buttonRemove.addEventListener('click', removeFromArray);

fruits.forEach(element =>
    container.innerHTML += '<li>' + element + '</li>'
);

function addToArray(newValue){
    newValue = prompt('Please provide your value');

    if(newValue === null){
        return;
    }

    fruits.push(newValue);
    container.innerHTML += '<li>' + newValue + '</li>'
}

function removeFromArray(removeValue){

    const listedItems = document.querySelectorAll('li');

    removeValue = prompt('Please provide your value');
    fruits.forEach(function(element,index,object) {
        if(element === removeValue){
           object.splice(index,1);
        }
    }); 

    listedItems.forEach(function(element){
        if(element.textContent === removeValue){
            element.style.display = 'none';
        }
    })
}





