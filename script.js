const input = document.querySelector("input");
const error1 = document.querySelector("#error");
const ul = document.querySelector("ul");
let todo = [];

function main() {
  if (input.value == "") {
    error1.textContent = "Please enter a task";
  } else {
    // console.log(input.value);
    todo.push(input.value);
    console.log(todo);
    input.value = "";
    ul.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
      const list = todo[i];
      ul.innerHTML += `<li>${list}&nbsp;<button  onclick="deleteBtn(${i})">Delete</button>&nbsp;
                <button onclick="editBtn(${i})">Edit</button> </li>`;
      error1.textContent = "";
    }
  }
}
function deleteBtn(index) {
  todo.splice(index, 1);
  render();
  console.log("Delete Button Called");
}

function editBtn(index) {
  const newEdit = prompt("Edit task:", todo[index]);
  if (newEdit !== "") {
    todo[index] = newEdit;
    render();
    console.log("Edit Button Called");
  }
}

function render() {
  ul.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const list = todo[i];
    ul.innerHTML += `
            <li>${list}
                <button onclick="deleteBtn(${i})">Delete</button>
                <button onclick="editBtn(${i})">Edit</button>
            </li>`;
  }
}
