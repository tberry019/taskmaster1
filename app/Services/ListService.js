import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
//import List from "../Models/List.js";

class ListService {
  // constructor() {
  //   ProxyState.on('lists', saveState)
  // }
  addValue() {
    ProxyState.lists = [...ProxyState.lists, new List({ title: Math.random() })]
  }
  removeList(id) {
    const list = ProxyState.list.filter(l => l.id !== id)
    ProxyState.list = list
  }
  createList(listData) {
    const list = new List(listData)
    // ProxyState.lists.push(list)
    // ProxyState.lists = ProxyState.lists
    ProxyState.lists = [...ProxyState.lists, list]

  }
}

export const listService = new ListService();
