import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"
import { getListForm } from "../Components/ListForm.js"

function _drawList() {
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('list').innerHTML = template

}
function _drawListForm() {
  document.getElementById('modal-body-slot').innerHTML = getListForm()
}
export class ListController {
  constructor() {
    ProxyState.on('lists', _drawList)
  }
  drawList() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getListForm()
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
  }

  drawListForm() {
    _drawListForm()
  }
}


