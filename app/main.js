import { ValuesController } from "./Controllers/ValuesController.js";
import { List } from "./Models/List.js";
import { ListController } from "./Controllers/ListController.js";


class App {
  ValuesController = new ValuesController();
  ListController = new ListController();
}

window["app"] = new App();




