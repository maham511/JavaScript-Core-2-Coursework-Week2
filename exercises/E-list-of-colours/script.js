function listOfColours(colours) {
  // Write your code here...
  let contentDiv = document.getElementById("content"); //store div

  let label = document.createElement("label"); //create and store label elem
  contentDiv.appendChild(label); //append label to div
  label.htmlFor = "colour-select"; //sets for attribute
  label.innerText = "Choose a colour:"; //renders 'choose colour'

  //Select element create, store, append to div, updated
  let select = document.createElement("select"); //create and store select elem
  contentDiv.appendChild(select); //append select to div
  select.name = "colours";
  select.id = "colour-select";
  select.style.margin = 10; //10px margin added to dropdown

  //create, store, append to div, & update 1 placeholder option elem
  let option = document.createElement("option");
  select.appendChild(option);
  option.value = ""; //empty value, quotes won't show in Chrome browser, but is valid
  option.innerText = "Please choose one";

  //loops through colours array, creates, appends and updates option elements
  colours.forEach((colour) => {
    let option = document.createElement("option");
    select.appendChild(option); //all options appended to select
    option.value = colour; //sets value of each option elem to relevant colour item
    option.innerText = colour;
  });

  //create, append, update para element
  let para = document.createElement("p");
  contentDiv.appendChild(para); //appended to div
  para.className = "result";

  //event listener added so when option changes, para renders correct text and colour
  select.addEventListener("change", (event) => {
    para.innerText = `You have selected: ${event.target.value}`;
    para.style.color = event.target.value; //renders text in corresponding color
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
