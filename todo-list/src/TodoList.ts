interface todoItem {
  id: number;
  todoText: string;
  isDone: boolean;
}

class TodoList {
  private todoObjectList: todoItem[];
  private uuid: number;
  private ulElement: HTMLElement;
  private buttonElement: HTMLElement;
  private inputElement: HTMLInputElement;
  constructor(
    ulSelector: string,
    buttonSelector: string,
    inputSelector: string
  ) {
    this.uuid = 0;
    this.todoObjectList = [];
    this.ulElement = this.selectTag(ulSelector);
    this.ulElement.addEventListener('click', this.processUlEvent.bind(this));
    this.buttonElement = this.selectTag(buttonSelector);
    this.buttonElement.addEventListener('click', this.add.bind(this));
    this.inputElement = this.selectInput(inputSelector);
  }

  private selectTag(cssExp: string): HTMLElement {
    return document.querySelector(cssExp) as HTMLElement;
  }

  private selectInput(cssExp: string): HTMLInputElement {
    return document.querySelector(cssExp) as HTMLInputElement;
  }

  private add() {
    const todoInput = this.inputElement.value;
    if (todoInput == '') {
      alert('Enter Item');
    } else {
      const todoObject: todoItem = {
        id: this.uuid++,
        todoText: todoInput,
        isDone: false,
      };
      this.todoObjectList.unshift(todoObject);
      this.display();
      this.inputElement.value = '';
    }
  }

  private deleteItem(eraseId: number) {
    const elementIndex = this.todoObjectList.findIndex(
      item => item.id === eraseId
    );
    this.todoObjectList.splice(elementIndex, 1);
    this.display();
  }

  private processUlEvent(e: Event) {
    const clickedElementName = (e.target as HTMLElement).nodeName;
    const clickedElement = e.target as HTMLElement;

    if (clickedElementName === 'LI') {
      this.toggleItem(clickedElement);
    } else if (clickedElementName === 'BUTTON') {
      const deleteId = clickedElement.getAttribute('data-id');
      this.deleteItem(Number(deleteId));
    }
  }

  private toggleItem(liElement: HTMLElement) {
    const checkedId = liElement.getAttribute('data-id');
    const elementIndex = this.todoObjectList.findIndex(
      item => item.id === Number(checkedId)
    );
    if (this.todoObjectList[elementIndex].isDone === true) {
      this.todoObjectList[elementIndex].isDone = false;
      liElement.classList.remove('checked');
    } else {
      this.todoObjectList[elementIndex].isDone = true;
      liElement.classList.add('checked');
    }
  }

  private display() {
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
