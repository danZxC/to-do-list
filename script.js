function addTask (){
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = 'added.png';
        img.alt = 'Task icon';
        li.appendChild(img);

        var span = document.createElement('span');
        span.textContent = taskInput.value;
        li.appendChild(span);

        li.addEventListener('click', () => toggleTask(li, img));
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
function toggleTask(li, img) {
    var taskList = document.getElementById('taskList');
    var completedList = document.getElementById('completedList');

    if (li.parentElement === taskList) {
        // Перемещение задачи в выполненные
        li.style.textDecoration = 'line-through';
        completedList.appendChild(li);
        img.src = 'completed.png'
    } else if (li.parentElement === completedList) {
        // Возврат задачи в активные
        li.style.textDecoration = 'none';
        taskList.appendChild(li);
        img.src = 'added.png'
    }
}

function toggleImage (){
    var showInput = document.getElementById("add-task-container")
    showInput.classList.toggle('active')
}