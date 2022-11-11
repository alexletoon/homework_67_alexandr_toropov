let addButton = document.getElementById('add-item-btn');
let divParent = document.getElementById('container');

let addElement = function(){
    let newDiv = document.createElement('div');
    newDiv.innerText = 'Какое-то уведомление!';
    let closeButton = document.createElement('button');
    closeButton.innerText = 'Закрыть';
    newDiv.append(closeButton);
    newDiv.style.backgroundColor = 'lightgreen';
    newDiv.style.height = '40px';
    newDiv.style.width = '300px';
    newDiv.style.padding = '15px';
    newDiv.style.margin = '25px';
    divParent.append(newDiv);
    let closeDiv = function(){
        divParent.removeChild(newDiv);
    }
    closeTimer = setTimeout(closeDiv, 5000);
    closeButton.addEventListener('click', closeDiv)
    closeButton.addEventListener('click', () => {
        clearTimeout(closeTimer);
        
    });
}

addButton.addEventListener('click', addElement);

