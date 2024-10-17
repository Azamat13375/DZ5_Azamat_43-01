var input = document.getElementById('input')
var create_button = document.getElementById('create_button')
var todolist = document.getElementById('todo_list')

var createTodo = () => {
    if (!input.value.trim()) return alert('Напиши что-нибудь')

    var div = document.createElement('div')
    var text = document.createElement('h3')
    var deleteBtn = document.createElement('button')
    var editBtn = document.createElement('button')


    deleteBtn.setAttribute("class", "delete_button")
    editBtn.setAttribute("class", "edit_button")
    div.setAttribute('class', 'block_text')


    deleteBtn.innerHTML = "Delete"
    editBtn.innerHTML = "Edit"
    text.innerHTML = input.value


    deleteBtn.addEventListener('click', (e) => {
        div.remove();
        console.log(e);
    });


    editBtn.onclick = () => {
        var editedText = prompt(`Edit: ${text.innerHTML}`).trim();
        if (editedText) text.innerHTML = editedText;
    };


    div.append(text, editBtn, deleteBtn);
    todolist.append(div)
    input.value = ''
};

create_button.onclick = () => createTodo();

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") createTodo()
});