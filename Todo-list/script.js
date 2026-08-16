let count=1;
function addTodo() {
    const inputel=document.getElementById("todo-input"); //get the input element
    const todo = inputel.value;
    const divel = document.createElement("div");
    divel.innerHTML = `<div>${count}. ${todo} </div>`;
    const deletebtn=document.createElement("button");
    deletebtn.textContent="trash";
    divel.append(deletebtn);
    deletebtn.onclick=()=> deleteTodo(divel); // this line adds an event listener instead of calling the function directly
    document.querySelector("todo-list").appendChild(divel);
    console.log(inputel.value);
    count++;
    inputel.value="";
}

function deleteTodo(item){
    item.remove();
}