import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListService {
  // constructor() {
  //   ProxyState.on('lists', saveState)
  // }

  deleteListItem(id) {
    const list = ProxyState.lists.filter(l => l.id !== id)
    ProxyState.lists = list
  }
  createList(listData) {
    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists, list]
    console.log(listData)
  }
}

export const listService = new ListService();
