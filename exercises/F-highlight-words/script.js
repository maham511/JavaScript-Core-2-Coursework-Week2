function highlightWords(paragraph, colours) {
  // Write your code here...
  let contentDiv = document.getElementById("content"); //store div

  //create, append, update para element
  let para = document.createElement("p");
  contentDiv.appendChild(para); //appended to div
  para.className = "result";

  //label element create, store, append to div, updated
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

   colours.forEach((colour) => {
     let option = document.createElement("option");
     select.appendChild(option); //all options appended to select
     option.value = colour; //sets value of each option elem to relevant colour item
     option.innerText = colour;
   });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
