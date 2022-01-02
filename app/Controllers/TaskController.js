import { taskService } from "../Services/TaskService.js"




// function _drawTask() {
//   //const lists = ProxyState.lists
//   let template = ''
//   ProxyState.tasks.forEach(t => template += t.taskTemplate)
//   document.getElementById('task').innerHTML = template
// }





export class TaskController {
  constructor() {
    //console.log('hellor from the tasksss');
  }

  createTask(listItemId) {
    window.event.preventDefault()
    let form = window.event.target
    const newTask = {
      title: form.title.value,
      listItemId: listItemId
    }
    taskService.createTask(newTask)
    console.log('list item obj', newTask);
  }
  drawTaskForm() {
    _drawTaskForm()
  }
}