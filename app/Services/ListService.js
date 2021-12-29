import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

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
  createList() {
    // ProxyState.lists = [new Lists(newList), ...ProxyState.lists]
    // console.log('lists in proxy', ProxyState.lists);

  }
}

export const listService = new ListService();
