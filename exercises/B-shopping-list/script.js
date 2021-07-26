function shoppingList(arrayOfPeople) {

  //create ul elem, appended to content div
  let list = document.createElement("ul"); //creates and stores ul element
  let contentDiv = document.getElementById("content"); //stores div
  contentDiv.appendChild(list); //appends list element to div

  //loops through people array, create li tags for each array item, append to ul
  arrayOfPeople.forEach(element => {
    let listItem = document.createElement("li"); //creates and stores li element
    listItem.innerText = element;  //adds array item string in relevant li
    list.appendChild(listItem);    //appends li to ul
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
