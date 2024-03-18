import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js"

//Quando a aplicação iniciar, ela trará o BD
import { sequelize } from "./utils/database.js";
import { association } from "./models/Associations.js";

const app = express();
const { json, urlendcoded } = pkg;

app.use(json());
app.use(urlendcoded({ extended: true }));

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

app.listen(3000, function() {
    console.log("Listening from 3000");
});

app.use("/", router);