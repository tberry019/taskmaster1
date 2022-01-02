import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TaskService {
  // constructor() {
  //   ProxyState.on('tasks', saveState)
  // }
  addValue() {
    ProxyState.tasks = [...ProxyState.tasks, new Task({ title: Math.random() })]
  }
  deleteTaskItem(id) {
    const task = ProxyState.tasks.filter(t => t.id !== id)
    ProxyState.tasks = task
  }
  createTask(newTask) {
    ProxyState.tasks = [new Task(newTask), ...ProxyState.tasks]
    console.log('tasks in task serv', ProxyState.tasks);

  }
}

export const taskService = new TaskService();
