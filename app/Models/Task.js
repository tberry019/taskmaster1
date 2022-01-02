import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.model = data.model
    this.listItemId = data.listItemId
  }

  get Template() {
    return /*html */`
    <div class=" p-4">
      <div class="bg-white text-dark shadow rounded">
        <div class="p-3">
          <p class="m-0">${this.title}</p> <input class="form-check-input" type="checkbox" id="check1" name="" value="something">
          <label class="form-check-label"></label> <i class="mdi mdi-delete mdi-10px selectable text-danger" onclick="app.TaskController.deleteTaskItem('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}
