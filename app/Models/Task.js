import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.model = data.model
    this.listItemId = data.listItemId
  }

  get Template() {
    return /*html */`
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="m-0">${this.name}</p>
          <p class="m-0">${this.id}</p>
          <p></p>
        </div>
      </div>
    </div>`
  }
}
