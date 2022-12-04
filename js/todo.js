const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// const toDosArray = [];
let toDosArray = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDosArray));
}

function deleteToDo(event){
    const deleteli = event.target.parentElement;
    //어떤 이벤트를 받아서 그 이벤트의 타겟(event.target 무엇이 클릭되었나)과
    //그 타겟의 부모요소(.parentElement)를 알 수 있다
    //특정해주지 않으면 많은 버튼 중 어떤 버튼을 click하는지 모름
    deleteli.remove();
    toDosArray = toDosArray.filter((toDo) => toDo.id !== parseInt(deleteli.id));
    saveToDos();
}

function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)

    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
    }
    toDosArray.push(newTodoObj);
    //toDosArray에 newTodo push
    paintToDo(newTodoObj);
    saveToDos();
    //localStorage에 저장하는 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

// if(savedTodos !== null){
//     const parsedToDos = JSON.parse(savedTodos);
//     parsedToDos.forEach(paintToDo);
// }
//새로고침해도 화면에 표시되게끔 해줌
//그러나 새로고침 후 새로운 todo 값을 입력하면 전에 있던 것은 삭제되고 새로운 것으로 대체됨 
//그래서 또 새로고침하면 이전에 것들은 안 나오고 마지막에 입력한 값들만 다시 표시됨
    //위에서 const toDosArray = [];로 시작될 때 항상 비어있게 지정되어있기 때문 

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDosArray = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
//const toDosArray = [];를 let으로 바꾸고 savedTodos에 값이 있을 경우 []가 아닌 parsedTodos가 들어가게하는 코드 추가

