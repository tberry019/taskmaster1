export function getListForm() {
  return `
  <div class="mb-3 d-flex justify-content-between">
  <form onsubmit="app.ListController.createList()">
    <div>
      
        <input type="color" id="color" name="color" class="form-control">
        <label for="title" class="form-label" value="">Title</label>
        <input type="text" minlength="3" maxlength="15" required class="form-control" name="make" id="title"
          aria-describedby="title" placeholder="title...">
      

    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
</div>
  `
}