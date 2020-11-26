const todoObjectList = [];
class Todo_Class {
  constructor(item) {
    this.ulElement = item;
  }

  add() {
    const todoInput = document.querySelector('#myInput').value;
    if (todoInput == '') {
      alert('Enter Item');
    } else {
      const todoObject = {
        id: todoObjectList.length,
        todoText: todoInput,
        isDone: false,
      };
      todoObjectList.unshift(todoObject);
      this.display();
      document.querySelector('#myInput').value = '';
    }
  }
  deleteItem(eraseId) {
    const elementIndex = todoObjectList.findIndex(item => item.id === eraseId);
    todoObjectList.splice(elementIndex, 1);
    this.display();
  }

  display() {
    this.ulElement.innerHTML = '';
    todoObjectList.forEach(item => {
      const liElement = document.createElement('li');
      const delBtn = document.createElement('button');

      liElement.innerHTML = item.todoText;
      liElement.setAttribute('data-id', item.id);
      delBtn.setAttribute('data-id', item.id);
      delBtn.classList.add('far', 'fa-trash-alt');
      this.ulElement.appendChild(liElement);
      liElement.appendChild(delBtn);

      delBtn.addEventListener('click', e => {
        const deleteId = e.target.getAttribute('data-id');
        console.log(this);
        this.deleteItem(Number(deleteId));
      });
      liElement.addEventListener('click', e => {
        e.target.classList.toggle('checked');
      });
    });
  }
}

// main
const listSection = document.querySelector('#myUL');
const myTodoList = new Todo_Class(listSection);

document.querySelector('.addBtn').addEventListener('click', function () {
  myTodoList.add();
});
