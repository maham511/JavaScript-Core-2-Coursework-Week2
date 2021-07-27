function todoList(todos) {
  // Write your code here...
  let contentDiv = document.getElementById("content"); //store div
  let list = document.createElement("ul"); //create and store ul
  contentDiv.appendChild(list);
  list.innerText = "Todo List"; //renders Todo List

  //loop for array
  todos.forEach((element, index) => {
    let listItem = document.createElement("li"); //create, store li
    list.appendChild(listItem); //appends li for each todo
    listItem.innerText = element.todo; //renders correct object values in each li
    listItem.style.textDecoration = "none";

    let onClickStrikethrough = function () {
      // listItem.style.color = "green";
      if (
        listItem.style.textDecoration === "none"
      ) {
        listItem.style.textDecoration = "line-through";
      } else if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
      }
    };
    //Adds strikethrough on li2 if clicked on it
    listItem.addEventListener("click", onClickStrikethrough);
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);