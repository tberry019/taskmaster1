
import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

// Need to set local storage name
export function saveState() {
  localStorage.setItem('TaskMaster', JSON.stringify({
    List: ProxyState.lists,
    Task: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TaskMaster'))
  console.log('load state data', data);
  if (data != null) {
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    console.log('load state', ProxyState.lists)
  }
}