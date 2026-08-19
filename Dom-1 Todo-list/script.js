let count=1;
function addTodo() {
    const inputel=document.getElementById("todo-input"); //get the input element
    const todo = inputel.value;
    const divel = document.createElement("div");
    divel.setAttribute("id","todo-"+count);
    divel.innerHTML = `<div>${count}. ${todo} <button onclick="deleteTodo(${count})">Trash</button></div>`;
    document.querySelector("#todo-list").appendChild(divel);
    console.log(inputel.value);
    count++;
    inputel.value="";
}

function deleteTodo(num){
    item=document.querySelector("#todo-"+num);
    item.remove();
    count--;
}