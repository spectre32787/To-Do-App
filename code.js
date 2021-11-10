const toDoEntry = document.getElementById("toDoEntry")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const todos = document.getElementById("toDoList")

// submit a todo
    // add an event listener (click) on the submit 
    // call the addTodo function
    submit.addEventListener("click", addToDo);     
    
// addTodo function    
    

function addToDo(event) {
    event.preventDefault()

    const toDoItem = toDoEntry.value
    const toDoLi = document.createElement("li")
    toDoLi.setAttribute("class", "entry")
    toDoItem.Document.getElementsByClassName("entry").document.body.appendChild(toDoItem)
    
    // 1. get the value of the user's input and save into variable
    // 2. create an li element (done)
    // 2a. append li with class li
    // 2b. append toDoItem to li
    

    // 3. create a delete button
        // 3a. append a class/id to the button


    // 4. append/attach delete button to the list item (li)
    // 5. append/attach this list item (li) to the unordered list (ul)
}








