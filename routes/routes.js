//conjunto de codigos separado do codigo principal

const routes = require("express").Router();
const controlador = require("../controller/TaskController.js");

routes.get("/", controlador.getAllTasks);
routes.post("/create", controlador.createTask);
routes.get("/getById/:id/:method", controlador.getById);
routes.post("/updateOne/:id", controlador.updateOneTask);
routes.get("/deleteOne/:id", controlador.deleteOneTaks);

module.exports = routes;
