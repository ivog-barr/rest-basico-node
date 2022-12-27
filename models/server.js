const express = require("express");
const cors = require("cors");
const router = require("../routes/user");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userRoutes = "/api/users";
    //middlewares
    this.middlewares();

    //rutas
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userRoutes, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
