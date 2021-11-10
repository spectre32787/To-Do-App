const toDoEntry = document.getElementById("toDoEntry")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const todos = document.getElementById("toDoList")

submit.addEventListener("click", addToDo);
  
// addTodo function    
function addToDo(event) {
    event.preventDefault();

    const toDoItem = toDoEntry.value;
    const toDoLi = document.createElement("li");
    toDoLi.setAttribute("class", "entry");
    const toDoEntry = document.createTextNode(toDoItem);
    toDoLi.document.appendChild(toDoEntry);
    document.getElementById(toDoList).appendChild(toDoLi);
}
         
  
    // submit a todo
    // add an event listener (click) on the submit 
    // call the addTodo function
    
    // 1. get the value of the user's input and save into variable (done)
    // 2. create an li element (done)
    // 2a. append li with class li (done)
    // 2b. create a text node (done)
    // 2c. append text node to li with toDoItem as argument (done)
    // 2d. append the li to the ul by id
    

    // 3. create a delete button
        // 3a. append a class/id to the button


    // 4. append/attach delete button to the list item (li)
    // 5. append/attach this list item (li) to the unordered list (ul)

// VARIABLES FOR REFERENCE
    // toDoItem = value of the input field
    // toDoEntry = text node with above value inserted
    // toDoLi = list item with text node and text value appended
    // 