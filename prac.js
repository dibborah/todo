const inputBox = document.getElementById("input-box");
const listContainer  = document.getElementById("list-container");

// Save the data on local storage and get Data on Local Storage

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function getData(){
   listContainer.innerHTML = localStorage.getItem("data")
}

//Function used to add list

function addList(){
    if(inputBox.value === ''){

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("button");
        span.innerHTML = "Delete";
        li.appendChild(span);
        saveData();
        // getData();
    }
    inputBox.value = "";
}

//Deleting item when clicked Delete

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // console.log("checked");
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        // console.log("Removing...")
    }
    // console.log("Working");
});

//Adding item pressed enter

inputBox.addEventListener("keydown", function(e){
    if (e.code === "Enter"){  //checks whether the keyword is "Enter"or not
        addList();
    }
});

// Removing item when right clicked

listContainer.addEventListener('contextmenu', function(e){
    // console.log("clicking left", e);
    e.preventDefault()
    e.target.remove();
})

//Toggle cancel cut item when left clicked

listContainer.addEventListener('click', function(e){
    console.log("clicking right", e);
    e.target.classList.toggle("completed");
})

//Things I need to know to achive this

// 1.trim()
// 2.updateLS()

// GAME PLAN(Dib's Plan)

// 1.UI/UX(CSSKeyframeRule)
