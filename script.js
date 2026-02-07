function addTask() {
    let input = document.getElementById("taskInput");
    let ul = document.getElementById("taskList");
    
    if (input.value.trim() === "") {
        alert("Fadlan qor waxqabad!");
        return;
    }

    // Samee Liis cusub (li)
    let li = document.createElement("li");
    li.innerHTML = `
        ${input.value}
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;

    // Ku dar liiska
    ul.appendChild(li);

    // Faaruqi input-ka
    input.value = "";
}
