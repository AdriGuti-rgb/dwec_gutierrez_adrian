// Variables globales
let todos = [
];

// Funciones handlers
function handleAddClick( e ) {
       let txt = document
                            .getElementById('input-text')
                            .value
                            .trim();
       document
              .getElementById('input-text')
              .value = '';
       if (txt) todos.push({
              task: txt,
              id: Math.trunc(Math.random()*(36**4)).toString(36).padStart(4, '0'),
              cheked: true
       });
       renderTodoList();
}

function handleEraseClick( e ) {
       let eraseId = e.currentTarget.dataset.id;
       todos = todos.filter( ({ id }) => !(eraseId==id));
       renderTodoList();
}


// Funciones render
function renderTodoList () {
       let ulList = document.querySelector('#todos ul');
       ulList.innerHTML = '';

       todos.forEach( ( {task, id, cheked} ) => {
              let liTodo = document.createElement('li');
              let spanBorrar =document.createElement('span');
              let btn = document.createElement("div");

              btn.classList.add("btn");
              btn.textContent = "X";
              btn.addEventListener ("click", () => {
                     cheked ? liTodo.classList.add("checked") : liTodo.classList.remove("checked");
                     cheked = !cheked;
              });

              liTodo.classList.add('todo');
              liTodo.textContent = task;
              spanBorrar.classList.add('btn');
              spanBorrar.textContent = 'Borrar';
              spanBorrar.dataset.id = id;
              spanBorrar.addEventListener( 'click', handleEraseClick );
              liTodo.append(spanBorrar);
              ulList.append(liTodo);
              liTodo.append(btn)
              
              // ulList.innerHTML += `<li class="todo">${todoText}</li`;
       })
}

document
       .getElementById('add-button')
       .addEventListener( 'click', handleAddClick );


