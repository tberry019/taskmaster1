import { taskService } from "../Services/TaskService.js"


export class TaskController {
  constructor() {
    console.log('hellor from the tasksss');
  }

  createTask(listItemId) {
    window.event.preventDefault()
    let form = window.event.target
    const newTask = {
      name: form.name.value,
      listItemId: listItemId

    }
    taskService.createTask(newTask)
    console.log('list item obj', newTask);
  }
}