import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"
import { getListForm } from "../Components/ListForm.js"

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
    console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const listData = {
      title: form.title.value,

    }
    listService.createList(listData)
    form.reset()
  }

  drawListForm() {
    _drawListForm()
  }

  deleteListItem(listItemId) {
    console.log('list item id', listItemId);
    listService.deleteListItem(listItemId)
  }
}


