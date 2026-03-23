
let todoIndex = 1;


function addTodo(){

    const element = document.getElementById("todoInput")
    const todo = element.value;
    element.value = "";
    if (todo === ""){
        return;
    }

    const todoDiv = document.createElement("Div");
    todoDiv.setAttribute("id", "todo" + todoIndex );

    const todoSpan = document.createElement("span");
        todoSpan.innerHTML = todo ;

        todoDiv.appendChild(todoSpan);

    const todoButton = document.createElement("button")
    todoButton.innerHTML= "Delete Todo"
    todoButton.setAttribute ("onclick", "deleteTodo("+  todoIndex + ")");

    todoDiv.appendChild(todoButton)

    document.getElementById("todos").appendChild(todoDiv);
    todoIndex = todoIndex + 1;

    
}

function deleteTodo (index) {
   // alert("hiii" + index);

   const divElement = document.getElementById("todo" + index);
   // divElement.parentElement.removeChild(divElement);
    //alternative

    document.getElementById("todos").removeChild(divElement);
}