const toDoEntry = document.getElementById("toDoEntry")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const todos = document.getElementById('app_List')

// submit a todo
    // add an event listener (click) on the submit 
    // call the addTodo function
    submit.addEventListener("click", addToDo);     
    
// addTodo function    
    

function addToDo(event) {
    event.preventDefault()

    // 1. get the value of the user's input and save into variable
    const toDoItem = toDoEntry.value
    

    // 2. create an li element
        // 2a. append an id/class to the li
        // 2b. append toDoItem to li
    

    // 3. create a delete button
        // 3a. append a class/id to the button


    // 4. append/attach delete button to the list item (li)
    // 5. append/attach this list item (li) to the unordered list (ul)
}







