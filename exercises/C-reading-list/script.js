function readingList(books) {
  // Write your code here...

  let listEl = document.createElement("ul");            //create and store ul element
  let contentDiv = document.getElementById("content");  //store div 
  contentDiv.appendChild(listEl); //ul added to div     //append ul to parent #content div

  //Loop through each book object, create, append, and update elements
  books.forEach((element, index) => {
    //Element creation
    let listItem = document.createElement("li"); //creates and stores li element
    let titlePara = document.createElement("p"); //create para el
    let image = document.createElement("img"); //create img

    //Elements appended to respective parent elements
    listEl.appendChild(listItem); //appends li to ul
    listItem.appendChild(titlePara); //appends 1 para per li element
    listItem.appendChild(image); //appends 1 image per li element

    //Elements contents/attributes updated
    titlePara.innerText = `${element.title} - ${element.author}`; //renders correct titles plus author in list
    image.src = element.url;
    image.height = 400;
    if (element.alreadyRead === true) {
      listItem.style.backgroundColor = "green";
    } else if (element.alreadyRead === false) {
      listItem.style.backgroundColor = "red";
    }
  });
}

 //url keys added to loop through
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "https://online.anyflip.com/efgtj/ljht/files/mobile/1.jpg?1605596723",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  },
];

readingList(books);

// https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg
