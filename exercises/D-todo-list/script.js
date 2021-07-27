function todoList(todos) {
  // Write your code here...
  let contentDiv = document.getElementById("content"); //store div
  let list = document.createElement("ul"); //create and store ul
  contentDiv.appendChild(list); //append ul to div
  list.innerText = "Todo List"; //renders Todo List for ul text

  //loop for todos array
  todos.forEach(element => {
    let listItem = document.createElement("li"); //create, store html collection of li
    list.appendChild(listItem); //appends li for each todo to ul
    listItem.innerText = element.todo; //renders correct object values in each li
    listItem.style.textDecoration = "none"; //sets default text-decoration property to none for all li

    //function to add/remove strikethrough on click, for each li
    let onClickStrikethrough = function () {
     //checks for current textdecoration value on click. If none, turns to strikethrough, and vice versa
      if (
        listItem.style.textDecoration === "none"
      ) {
        listItem.style.textDecoration = "line-through";
      } else if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
      }
    };

    //Event listener added to each listItem li using click and callback function
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