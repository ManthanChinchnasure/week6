function addTodo(){
 //console.log("hi there is print....")    it run at web broweser 
 // alert("hi there")   it run in fortend 


// write the code that reads the contents of the input box
// creates a new todo on yhe html dom
     // step-1 create a new div element in js as a variable)
     // step-2 insert that div element to a parent div
// clear the input box 


let element = document.getElementById("todoInput")
//console.log(element);
const Todo = element.value;
//console.log(Todo);



// const newDiv = document.createElement("div");
// newDiv.innerHTML = Todo;


const newDiv = document.createElement("div");
newDiv.innerHTML = "<span>" + Todo + "</span>  <button> delete Ttodo </button>";


const parentDiv = document.getElementById("todos");
parentDiv.appendChild(newDiv);



}