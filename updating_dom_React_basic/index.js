// function addTodo() {
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;

// ugly way => becoz innerHtml overwrite to our previous value.
// we need to add in next line
//   document.getElementById("todolist").innerHTML = ` <div>${title}</div>
//                                        <div>${description}</div>
//                                   <button>Mark as done </button> `;

// write to function in nextLine we can do like this
//   const originalHtml = document.getElementById("todolist").innerHTML;
//   document.getElementById("todolist").innerHTML =
//     originalHtml +
//     `<div>${title}</div>
//     <div>${description}</div>
//    <button>Mark as done </button>`;

// create title description and button using cleaner way

//    const outerDiv=document.createElement("div");
//    const outerDiv2=document.createElement("div");
//    outerDiv.innerHTML=title;
//    outerDiv2.innerHTML=description;
//    document.getElementById("todolist").appendChild(outerDiv);
//    document.getElementById("todolist").appendChild(outerDiv2);

// }

var globalId = 1;

function markAsDone(todoId){
    const parent=document.getElementById(todoId)
    parent.children[2].innerHTML="done";
}

function createChild(title,description,Id){
    const child=document.createElement("div");
    const firstGrandParent=document.createElement("div");
    firstGrandParent.innerHTML=title;
    const secondGrandParent=document.createElement("div");
    secondGrandParent.innerHTML=description;
    const thirdGrandParent=document.createElement("button");
    thirdGrandParent.innerHTML="Mark as done";
    thirdGrandParent.setAttribute("onClick",`markAsDone(${Id})`)
    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(thirdGrandParent);
    child.setAttribute("id",Id)
    return child;
}

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const parent = document.getElementById("todolist");
  parent.appendChild(createChild(title, description, globalId++));
}
