const inputBox = document.querySelector('.input')
const todoMain = document.querySelector('.todo-list')

const deleteBtn = document.querySelector('.delete-button')

const addBtn = document.querySelector('.input-button')
const deleteAllBtn = document.querySelector('.clear-all')

//FOCUS OR GO HOME
//AS SIMPLE AS THAT

// EventListeners 

inputBox.addEventListener("keyup", function(){
    let userInput = inputBox.value;
    if (userInput.trim() != 0) {
    addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active");
    }
})

addBtn.addEventListener("click", todoAdd);
todoMain.addEventListener("click", todoDelete);

// Functions 

function todoAdd(event){
    event.preventDefault();

    const todoLi = document.createElement('li');
    todoLi.innerText = inputBox.value;

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    todoDeleteBtn.classList.add('delete-button')
    todoLi.appendChild(todoDeleteBtn);

    todoMain.appendChild(todoLi);

    inputBox.value = '';

    addBtn.classList.remove("active");
};

function todoDelete(e){
    const item = e.target;
    if (item.classList[0] === 'delete-button'){
        todoMain.removeChild(todoLi);
    }
}





