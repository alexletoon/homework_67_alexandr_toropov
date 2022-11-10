let addButton = document.getElementById('add-item-btn');
let divParent = document.getElementById('container');

let addElement = function(){
    let newDiv = document.createElement('div');
    newDiv.innerText = 'Какое-то уведомление!';
    let closeButton = document.createElement('button');
    closeButton.innerText = 'Закрыть';
    newDiv.append(closeButton);
    divParent.append(newDiv);
    let closeDiv = function(){
        divParent.removeChild(newDiv)
    }
    closeTimer = setTimeout(closeDiv, 5000)
    closeButton.addEventListener('click', closeDiv, clearTimeout(closeTimer));
}

addButton.addEventListener('click', addElement);
