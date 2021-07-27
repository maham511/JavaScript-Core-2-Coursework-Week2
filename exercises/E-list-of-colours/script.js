function listOfColours(colours) {
  // Write your code here...
  let contentDiv = document.getElementById("content"); //store div

  let label = document.createElement("label"); //create and store label elem
  contentDiv.appendChild(label); //append label to div
  label.htmlFor = 'colour-select'; //sets for attribute
  label.innerText = 'Choose Colour'; //renders 'choose colour'

  let select = document.createElement("select"); //create and store select elem
  contentDiv.appendChild(select); //append select to div
  select.name = 'colours';
  select.id = 'colour-select';

  colours.forEach(colour => {
    let option = document.createElement('option');
    select.appendChild(option);  //all options appended to select
    option.value = colour  //sets value of each option elem to relevant colour item
    option.innerText = colour
  }
    )
  let option1 = 

  console.log(label);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
