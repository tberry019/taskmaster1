import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"
import { getListForm } from "../Components/ListForm.js"
import { loadState } from "../Utils/LocalStorage.js";

function _drawList() {
  //const lists = ProxyState.lists
  let template = ''
  ProxyState.lists.forEach(l => template += l.listTemplate)
  document.getElementById('list').innerHTML = template
}


function _drawListForm() {
  document.getElementById('modal-body-slot').innerHTML = getListForm()
}
export class ListController {
  constructor() {
    ProxyState.on('lists', _drawList)
    ProxyState.on('tasks', _drawList)


    _drawList()
  }


  createList() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const listData = {
      title: form.title.value,
      color: form.color.value
    }
    console.log(listData)
    listService.createList(listData)
    //form.reset()
  }

  drawListForm() {
    _drawListForm()
  }

  deleteListItem(listItemId) {
    console.log('list item id', listItemId);
    if (confirm("Are you sure you want to delete this list?") == true) {
      listService.deleteListItem(listItemId)
    }
  }






}




