import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.test = data.test
    this.model = data.model


  }

  get listTemplate() {
    return /*html*/`
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <div class="p-3">
          <p style="background-color: ${this.color}" class="m-0" >${this.title}</p>
          
          <i class="mdi mdi-delete mdi-24px selectable text-danger" onclick="app.ListController.deleteListItem('${this.id}')"></i>
          <div class="col-12 mt-2">
            <h6>Tasks: </h6>
              <ul>
              ${this.Tasks}
              </ul>
              <form onsubmit="app.TaskController.createTask('${this.id}')">
                <div class="form-group d-flex">
                  <!-- Input field for toppings -->
                  <input type="text" name="name" id="title" class="form-control" placeholder="Tasks....">
                  <button class="btn btn-success">+</button>
                </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>`

  }

  get Tasks() {
    let template = ''
    let foundTask = ProxyState.tasks.filter(t => t.listItemId == this.id)
    foundTask.forEach(t => template += t.Template)
    console.log('found task', foundTask)
    return template
  }
}






