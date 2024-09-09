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

let book1 = new Book("Sample Book 1", "Sample Author 1", true);
let book2 = new Book("Sample Book 2", "Sample Author 2", true);
let book3 = new Book("Sample Book 3", "Sample Author 3", false);
myLibrary.push(book1, book2, book3);

function displayBooks() {
    container.innerHTML = ""
    myLibrary.forEach((item, index) => {
        addCard(item, index)
    });
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBook(book) {

    myLibrary.push(book)
}

function removeBook(index) {
    console.log(index)
    myLibrary.splice(index, 1)
}

function makeCardContent(book) {
    return `Title: <strong>${book.title}</strong> <br> Author: ${book.author} <br> Read: ${(book.read == true) ? "Yes" : "No"}`
}

function addCard(book, index) {
    let card = document.createElement("div")
    card.classList.add("card")
    container.appendChild(card)

    let cardContent = document.createElement("div");
    cardContent.classList.add("cardContent")
    cardContent.innerHTML = makeCardContent(book)

    card.appendChild(cardContent)

    let cardBtnContainer = document.createElement("div");
    cardBtnContainer.classList.add("cardBtnContainer")
    card.appendChild(cardBtnContainer)

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    cardBtnContainer.appendChild(removeBtn)
    removeBtn.addEventListener("click", () => {

        removeBook(index);
        displayBooks()
    })

    let readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    cardBtnContainer.appendChild(readBtn)
    readBtn.addEventListener("click", () => {


        book.toggleRead()
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

    try {
        let newBook = new Book(title.value, author.value, read2bool(read.value));

        addBook(newBook)
        displayBooks()

    } catch (error) {
        console.log(error);

    }

    //clear inputs
    clearInputs(title, author);
    try {
        read.checked = false;
    } catch (error) {
        console.log(error);

    }
    // hide form
    hideElement(formContainer, submitBtn)
    showElement(newBookBtn, "block")
})

displayBooks()
hideElement(formContainer, submitBtn)