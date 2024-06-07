let id = 0

document.getElementById('add').addEventListener('click', ()=>{
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('name').value;
    row.insertCell(1).innerHTML = document.getElementById('class').value;
    row.insertCell(2).innerHTML = document.getElementById('race').value;
    // row.insertCell(3).innerHTML = 
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('class').value='';
});

createDeleteButton = (id) => {
    let btn = document.createElement('button');
    btn.className = 'btn btn-Primary text-light';
    btn.id = id;
    btn.innerHTML = 'Delete'
    btn.onclick = () => {
        console.log(`Deleting Row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}


 