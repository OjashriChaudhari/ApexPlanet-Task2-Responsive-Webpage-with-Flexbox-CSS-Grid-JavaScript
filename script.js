// FORM VALIDATION
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector(".form");

const name_error = document.getElementById("name-error");
const email_error = document.getElementById("email-error");
const message_error = document.getElementById("message-error");

form.addEventListener("submit", (e) => {
  let isValid = true;

  var email_check =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //name validate
  if (name.value.trim() === "") {
    e.preventDefault();
    name_error.innerHTML = "name is required";
    name.focus();
    isValid = false;
  } else {
    name_error.innerHTML = "";
  }

  //email validate
  if (email.value.trim() === "") {
    e.preventDefault();
    email_error.innerHTML = "email is required";
    email.focus();
    isValid = false;
  } else if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = "enter a valid email";
    email.focus();
    isValid = false();
  } else {
    email_error.innerHTML = "";
  }

  //message validate
  if (message.value.trim() === "") {
    e.preventDefault();
    message_error.innerHTML = "message is required";
    message.focus();
    isValid = false;
  } else {
    message_error.innerHTML = "";
  }

  if (isValid) {
    alert("Form Submitted Successfully!");
    form.reset();
  }
});

// TO DO LIST

const inputBox = document.getElementById("todo-input-box");
const addbtn = document.getElementById("todo-addBtn");
const todoList = document.getElementById("todo-list");

let editToDo = null;

const addToDo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("You must write something your to do.");
    inputBox.focus();
    return;
  }

  if (addbtn.value === "Edit") {
    editToDo.target.previousElementSibling.innerHTML = inputText;
    addbtn.value = "Add";
    inputBox.value = "";
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn", "editbtn");
    li.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn", "deletebtn");
    li.appendChild(deletebtn);

    todoList.appendChild(li);
    inputBox.value = "";
    inputBox.focus();
  }
};

const updateToDo = (e) => {
  if (e.target.innerHTML == "Remove") {
    todoList.removeChild(e.target.parentElement);
  }

  if (e.target.innerHTML == "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addbtn.value = "Edit";
    editToDo = e;
  }
};
addbtn.addEventListener("click", addToDo);
todoList.addEventListener("click", updateToDo);
