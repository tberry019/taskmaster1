
import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

// Need to set local storage name
export function saveState() {
  localStorage.setItem('TaskMaster1', JSON.stringify({
    list: ProxyState.lists,
    task: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TaskMaster1'))
  console.log('load state data', data);
  if (data != null) {
    ProxyState.lists = data.list.map(l => new List(l))
    ProxyState.tasks = data.task.map(t => new Task(t))
    console.log('load state', ProxyState.lists)
  }
}