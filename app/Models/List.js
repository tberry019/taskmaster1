import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.model = data.model

  }

  get listTemplate() {
    return /*html*/`
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="m-0">List tile:${this.title}</p>
          <i class="mdi mdi-delete mdi-24px selectable text-danger" onclick="app.ListController.deleteListItem('${this.id}')"></i>
          <p></p>
          
            <form onsubmit="app.TaskController.createTask('${this.id}')">
              <div class="form-group d-flex">
                <!-- Input field for tasks -->
                <input type="text" name="title" class="form-control" placeholder="Tasks....">
                <button class="btn btn-success">+</button>
                <div class="row" id ="tasks${this.id}">

                </div>
              </div>
            </form>
        </div>
      </div>
      
    </div>`

  }

  get Tasks() {
    let taskTemplate = ''
    let foundTask = ProxyState.tasks.filter(t => t.listItemId == this.id)
    foundTask.forEach(t => taskTemplate += taskTemplate)
    return taskTemplate
  }

}






