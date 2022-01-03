import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.model = data.model
    this.listItemId = data.listItemId
    this.quantity = data.quantity
    this.completed = data.completed || false
  }

  get Template() {
    return /*html */`
    <div class="p-4 text-wrap ">
      <div class="bg-white text-dark  text-wrap text-decoration-underline">
        <div class="p-3 text-wrap">
          <p class="m-0 text-wrap">${this.title}</p> <input class="form-check-input text-wrap" type="checkbox" ${this.completed} name="" value="something">
          <label class="form-check-label text-wrap"></label> <i class="mdi mdi-delete mdi-10px selectable text-danger" onclick="app.TaskController.deleteTaskItem('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}
