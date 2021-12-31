export function getTaskForm() {
  return `
  <form onsubmit="app.ListController.createList()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" name="make" id="title" aria-describedby="title"
        placeholder="title..." required>
    </div>
  </div>
</form>
  `
}