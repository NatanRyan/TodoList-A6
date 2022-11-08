const mongoose = require("mongoose");

const conexaoBD = () => {
  mongoose
    .connect(
      "mongodb+srv://natan:natan@todolista6.hytthfj.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conexão Estavél"))
    .catch((err) => console.log(err));
};

module.exports = conexaoBD;
    