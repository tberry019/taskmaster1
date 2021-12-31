import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TaskService {
  // constructor() {
  //   ProxyState.on('tasks', saveState)
  // }
  addValue() {
    ProxyState.tasks = [...ProxyState.tasks, new Task({ title: Math.random() })]
  }
  removeTask(id) {
    const task = ProxyState.task.filter(t => t.id !== id)
    ProxyState.task = task
  }
  createTask(newTask) {
    ProxyState.tasks = [new Task(newTask), ...ProxyState.tasks]
    console.log('tasks in task serv', ProxyState.tasks);

  }
}

export const taskService = new TaskService();
