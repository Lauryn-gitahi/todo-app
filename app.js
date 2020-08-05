
const inputText=document.querySelector(".input-text");
const addBtn=document.querySelector(".add");
const listItems=document.querySelector(".list-items");


addBtn.addEventListener("click", addTodo);
listItems.addEventListener("click" , checkDelete);

function  addTodo(event){
    event.preventDefault();
    //create new div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create new li

    const todoList= document.createElement("li");
    todoList.innerText="hello";
    todoList.classList.add("todo-item");
    todoDiv.appendChild(todoList);

    //create checkBtn and deleteBtn
    const checkBtn=document.createElement("button");
    checkBtn.innerHTML='<i class="fas fa-check"></i>';
    checkBtn.classList.add("checkedBtn");
    todoDiv.appendChild(checkBtn);

    //deleteBtn
    const deleteBtn=document.createElement("button");
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    //append todoDiv
    listItems.appendChild(todoDiv);

    //clear todoInput
    inputText.value="";
}

function checkDelete(e){
    const item = e.target;
    // console.log(item);

    if(item.classList[0] === "delete-btn"){
        const todo= item.parentElement;
            todo.remove();
    }

    if(item.classList[0] === "checkedBtn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");

    }
}











