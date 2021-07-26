function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

//loop through people array
//create H1 tag for each object
//create H2 tag for each object
//H1 should have correct name of person
//H2 has correct job of person
//Append all tags in #content div using appendChild


//-----------1 h1 el created, inner text has name, appended to div
//  let h1El = document.createElement("h1");
//  h1El.innerText = 'Maha';
//  content.appendChild(h1El);

// console.log(content); //logs div with h1 inside!

// //-----------1 h2 el created, inner text has job, appended to div
//  let h2El = document.createElement("h2");
//  h2El.innerText = 'Web Dev';
//  content.appendChild(h2El);

// console.log(content); //logs div with h2 inside!


//Prints same Maha Web Dev 3 times
people.forEach (person => {

  //  -----------1 h1 el created, inner text has name, appended to div
 let h1El = document.createElement("h1");
 h1El.innerText = person.name;
 content.appendChild(h1El);

// //console.log(content); //logs div with h1 inside!

// //-----------1 h2 el created, inner text has job, appended to div
 let h2El = document.createElement("h2");
 h2El.innerText = person.job;
 content.appendChild(h2El);
  
})
