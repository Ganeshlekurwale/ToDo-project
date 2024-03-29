let todoList = [ 
  {
    item: 'Buy milk', 
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to college',
    dueDate: '1/10/2023'
  }

];
displayItems();



function addTodo() {
  let inputElement = document.querySelector('#input-text');
    let dateElement = document.querySelector('#inputDate');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item:todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = ''
  displayItems();
}


function displayItems() {
  let displayElement = document.querySelector('.displayContainer');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let todoItem = todoList[i].item;
    let todoDate = todoList[i].dueDate;
    newHtml += `
      <span>${todoItem}</span>
      <span>${todoDate}</span>
      <button class="btn-green" onClick="todoList.splice(${i},1);
      displayItems();"> Delete</button>
    `;
  }
  displayElement.innerHTML = newHtml;
}