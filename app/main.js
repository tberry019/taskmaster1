import { ValuesController } from "./Controllers/ValuesController.js";
import { List } from "./Models/List.js";
import { ListController } from "./Controllers/ListController.js";


import { Task } from "./Models/Task.js";
import { TaskController } from "./Controllers/TaskController.js";

class App {
  ValuesController = new ValuesController();
  ListController = new ListController();
  TaskController = new TaskController();
}

window["app"] = new App();




