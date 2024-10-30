const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        // Create list item and add it to the list container
        let li =document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        // Add the delete button
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// click function
listContainer.addEventListener('click', function(e){

    // If clicked on the list the checked will be visible
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
        
    }

    // If clicked on the x then it will be removed
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// Save the data to the local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// To see when we close and take the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();