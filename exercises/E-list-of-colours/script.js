function listOfColours(colours) {
  // Write your code here...
  let contentDiv = document.getElementById("content"); //store div

  let label = document.createElement("label"); //create and store label elem
  contentDiv.appendChild(label); //append label to div
  label.htmlFor = "colour-select"; //sets for attribute
  label.innerText = "Choose Colour"; //renders 'choose colour'

  let select = document.createElement("select"); //create and store select elem
  contentDiv.appendChild(select); //append select to div
  select.name = "colours";
  select.id = "colour-select";
  let option = document.createElement("option");
  select.appendChild(option);
  option.value = ""; //empty value, quotes won't show in Chrome browser, but is valid
  option.innerText = "Please choose one";

  //creat para element
  let para = document.createElement("p");
  contentDiv.appendChild(para); //appended to div
  para.className = "result";

  //loops through colours array, creates, appends and updates option elements
  colours.forEach((colour) => {
    let option = document.createElement("option");
    select.appendChild(option); //all options appended to select
    option.value = colour; //sets value of each option elem to relevant colour item
    option.innerText = colour;

  });

  //event listener added so when select option changes, para renders with correct text and colour
   select.addEventListener("change", (event) => {
     //   const result = document.querySelector(".result");
     para.innerText = `You have selected:${event.target.value}`;
   });

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
