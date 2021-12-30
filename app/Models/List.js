import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class List {

  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.model = data.model



  }

  get Template() {
    return `
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="m-0">${this.title}</p>
          <p>test2</p>
        </div>
      </div>
    </div>`
  }
}




