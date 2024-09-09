const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
};

function addBookToLibrary(myLibrary, title, author, read) {
    let book = new Book(title, author, read);
    myLibrary.push(book);
};

const container = document.querySelector(".container")
let formContainer = document.querySelector(".formContainer");
let newBookBtn = document.querySelector(".btnContainer");
let submitBtn = document.querySelector(".submitBtn")

let book1 = new Book("Percy Jackson and the Lightning Thief", "Rick Riordan", true);
let book2 = new Book("Harry Potter", "JK Rowling", true);
let book3 = new Book("Alex Rider", "Unknown", false);
myLibrary.push(book1, book2, book3);

function displayBooks() {
    container.innerHTML = ""
    myLibrary.forEach((item, index) => {
        addCard(item, index)
    });
}

function addBook(book) {

    myLibrary.push(book)
}

function removeBook(index) {
    console.log(index)
    myLibrary.splice(index, 1)
}

function makeCardContent(book) {
    return `${book.title} <br> ${book.author} <br> ${(book.read == true) ? "Read" : "Not Read"}`
}

function addCard(book, index) {
    let card = document.createElement("div")
    card.classList.add("card")
    container.appendChild(card)
    card.innerHTML = makeCardContent(book)

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    card.appendChild(removeBtn)
    removeBtn.addEventListener("click", () => {

        removeBook(index);
        displayBooks()
    })

    let readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    card.appendChild(readBtn)
    readBtn.addEventListener("click", () => {


        book.read = !book.read
        console.log(book.read);

        displayBooks()
    })
}

function hideElement(...element) {
    element.forEach((item) => item.style.display = "none")
}

function showElement(element, style) {
    element.style.display = style
}

function clearInputs(...elem) {
    elem.forEach((item) => item.value = "")
};

function read2bool(value) {
if (value == "true")
    return true
else if (value == "false")
    return false
else return
}

newBookBtn.addEventListener("click", () => {
    showElement(formContainer, "flex")
    showElement(submitBtn, "block")
    hideElement(newBookBtn)
})

submitBtn.addEventListener("click", () => {
    let title = document.querySelector("#title")
    let author = document.querySelector("#author")
    let read = document.querySelector("input[name=read]:checked")


    let newBook = new Book(title.value, author.value, read2bool(read.value));

    addBook(newBook)
    displayBooks()

    //clear inputs
    clearInputs(title, author);
    read.checked = false;
    // hide form
    hideElement(formContainer, submitBtn)
    showElement(newBookBtn, "block")
})

displayBooks()
hideElement(formContainer, submitBtn)