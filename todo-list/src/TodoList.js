"use strict";
class TodoList {
    constructor(ulSelector, buttonSelector, inputSelector) {
        this.uuid = 0;
        this.todoObjectList = [];
        this.ulElement = this.selectTag(ulSelector);
        this.ulElement.addEventListener('click', this.processUlEvent.bind(this));
        this.buttonElement = this.selectTag(buttonSelector);
        this.buttonElement.addEventListener('click', this.add.bind(this));
        this.inputElement = this.selectInput(inputSelector);
    }
    selectTag(cssExp) {
        return document.querySelector(cssExp);
    }
    selectInput(cssExp) {
        return document.querySelector(cssExp);
    }
    add() {
        const todoInput = this.inputElement.value;
        if (todoInput == '') {
            alert('Enter Item');
        }
        else {
            const todoObject = {
                id: this.uuid++,
                todoText: todoInput,
                isDone: false,
            };
            this.todoObjectList.unshift(todoObject);
            this.display();
            this.inputElement.value = '';
        }
    }
    deleteItem(eraseId) {
        const elementIndex = this.todoObjectList.findIndex(item => item.id === eraseId);
        this.todoObjectList.splice(elementIndex, 1);
        this.display();
    }
    processUlEvent(e) {
        const clickedElementName = e.target.nodeName;
        const clickedElement = e.target;
        if (clickedElementName === 'LI') {
            this.toggleItem(clickedElement);
        }
        else if (clickedElementName === 'BUTTON') {
            const deleteId = clickedElement.getAttribute('data-id');
            this.deleteItem(Number(deleteId));
        }
    }
    toggleItem(liElement) {
        const checkedId = liElement.getAttribute('data-id');
        const elementIndex = this.todoObjectList.findIndex(item => item.id === Number(checkedId));
        if (this.todoObjectList[elementIndex].isDone === true) {
            this.todoObjectList[elementIndex].isDone = false;
            liElement.classList.remove('checked');
        }
        else {
            this.todoObjectList[elementIndex].isDone = true;
            liElement.classList.add('checked');
        }
    }
    display() {
        this.ulElement.innerHTML = '';
        this.todoObjectList.forEach(item => {
            const liElement = document.createElement('li');
            const delBtn = document.createElement('button');
            liElement.innerHTML = item.todoText;
            liElement.setAttribute('data-id', String(item.id));
            this.ulElement.appendChild(liElement);
            delBtn.setAttribute('data-id', String(item.id));
            delBtn.classList.add('far', 'fa-trash-alt');
            if (item.isDone === true) {
                liElement.classList.add('checked');
            }
            liElement.appendChild(delBtn);
        });
    }
}
// main
const myTodoList = new TodoList('#myUL', '.addBtn', '#myInput');
