function readingList(books) {
  // Write your code here...
  //store div and append

  //loop each book:
  //1. create li
  //2. create <p> with book title and author name
  //3. append p to li
  //4. create img tag, use bookcover url for src
  //5. append img to li
  //6. give li backgroundColor if green(true) or red(false)
  //7. create ul, append to div

  //7. create ul, append to div
  let listEl = document.createElement('ul');
  let contentDiv = document.getElementById('content');
  contentDiv.appendChild(listEl);  //ul added to div


//creates and appends right num of li, renders index values
//   books.forEach((element, index) => {
//     let listItem = document.createElement("li"); //creates and stores li element
//     listItem.innerText = index; //adds array item string in relevant li
//     listEl.appendChild(listItem); //appends li to ul
// })

  books.forEach((element, index) => {
    let listItem = document.createElement("li"); //creates and stores li element
    let titlePara = document.createElement("p"); //create para el
    listItem.appendChild(titlePara); //appends 1 para per li element
    // titlePara.innerText = element.title; //renders correct titles in list
    titlePara.innerText = `${element.title} - ${element.author}`; //renders correct titles plus author in list
    listEl.appendChild(listItem); //appends li to ul
    
    let image = document.createElement('img');
    listItem.appendChild(image);
    image.src = element.url;
    image.height = 400;
    if(element.alreadyRead === true) {
      listItem.style.backgroundColor = 'green'
    }
    else if (element.alreadyRead === false) {
      listItem.style.backgroundColor = "red"
    }
  });

}

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
    url: 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg'
  }
];

readingList(books);

// https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg