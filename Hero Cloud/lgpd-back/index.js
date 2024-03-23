import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js"

//Quando a aplicação iniciar, ela trará o BD
import sequelize from "./utils/database.js";
import association from "./models/Associations.js";

import cors from "cors";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", router);
app.use(cors());

(async () => {
    try {
        association.associations();//Monta sequelize
        await sequelize.sync(); //Espera-o sincronizar
        app.listen(3000, function () { //Vai escutar e disponibilizar a função para rodar
            console.log("Listening from 3000");
        })
    } catch (error) {
        console.log(error);
    }
})();

//Essa parte foi deletada posteriormente?
app.listen(3000, function() {
    console.log("Listening from 3000");
});

app.use("/", router);