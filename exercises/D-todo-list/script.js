function todoList(todos) {
  // Write your code here...
  let contentDiv = document.getElementById('content'); //store div
  let list = document.createElement('ul'); //create and store ul
  contentDiv.appendChild(list);
  list.innerText = 'Todo List' //renders Todo List

  //loop for array
  todos.forEach(element => {
      let listItem = document.createElement('li'); //create, store li
      list.appendChild(listItem); //appends li for each todo
   //  list.innerText = element; //renders [object Object]
  });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);