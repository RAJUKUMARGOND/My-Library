console.log("this is ES6 version of MyLibrary");

class Book{

constructor(Name, Author, Type) {

    this.Name = Name;
    this.Author = Author;
    this.Type = Type;

}
}

class Display
{

    // add function
    add (book) {
        console.log("Adding to UI");
     let   TableBody = document.getElementById('TableBody');
        let uiString = `<tr>
                            <td>${book.Name}</td>
                            <td>${book.Author}</td>
                            <td>${book.Type}</td>
                        </tr>`;
        TableBody.innerHTML += uiString;
    }
// clear function
    clear () {
        let LibraryForm = document.getElementById("LibraryForm")
        LibraryForm.reset();
    
    }

// validate function

    validate  (book) {
        if (book.Name.length < 2 || book.Author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    
    }



// show function

    
    show (type, displaymessage)
    {
let message = document.getElementById('message');

let Message;
if(type==='Success:')
{
    Message='Success:';
}
else
{
    Message='Error!';
}
       message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
       <strong>${Message} </strong> ${displaymessage}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`;


   setTimeout(function(){


message.innerHTML="";



   },5000);




} 


}

// adding eventlistener to libraryfrom

let LibraryForm = document.getElementById('LibraryForm');

LibraryForm.addEventListener('submit', LibraryFormSubmit);

// making function --> LibraryFormSubmit

function LibraryFormSubmit(e) {

    // extracting all values from form

    let Name = document.getElementById('BookName').value;
    let Author = document.getElementById('Author').value;
    let type;

    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('Programming');
    let poetry = document.getElementById('Poetry');

    if (Fiction.checked) {
        Type = fiction.value;
    }
    else if (Programming.checked) {
        type = programming.value;
    }
    else {
        Type = poetry.value;
    }


    let book = new Book(Name, Author, Type);

    console.log(book);

    // making display for showing




    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success:', " Your book has been succesfully added");
    }
    else {
        display.show('Error!', " Soory! You can't add this book");
    }





    console.log("you have submitted library form");
    e.preventDefault();

}
