let input = document.querySelector('.todo_input');
let mainTodoContainer = document.getElementById('todos');
let addBtn = document.querySelector('.add-item')
let deleteBtn = document.querySelector('.deleteBtn')

addBtn.addEventListener('click', (e) =>{
    // create all the elements
    if(input.value.trim()){
        // list ul
        let ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        // todo list div
        let todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        //  list li
        let liTag = document.createElement('li');
        liTag.innerHTML = input.value
        liTag.classList.add('todo-item');
        // console.log(liTag);
        // div btn
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('button');
        // completed btn el
        let completeBtn = document.createElement('button');
        completeBtn.classList.add('completed')
        completeBtn.innerHTML = "<i class = 'fas fa-check'></i>";
        // edit btn el
        let editBtn = document.createElement('button');
        editBtn.classList.add('editBtn')
        editBtn.innerHTML = "<i class = 'fas fa-edit'></i>";
        // trash btn el
        let trashBtn = document.createElement('button');
        trashBtn.classList.add('trash')
        trashBtn.innerHTML = "<i class = 'fas fa-trash'></i>";
        
        // appending el
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(btnDiv);
        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(trashBtn);
        // append all the el in main div
        mainTodoContainer.appendChild(ulTag);

        // complete and trash button working
        todoList.addEventListener('click', (e) =>{
            let items = e.target;
            if(items.classList[0] === 'completed'){
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.classList.add('line-through')
            }
        })
        // when you click on + btn clear the input value
        input.value = '';
        // console.log(ulTag);


    }
})