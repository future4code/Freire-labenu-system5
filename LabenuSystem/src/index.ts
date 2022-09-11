/* import { app } from "./app";
import { BaseDataBase } from "./data/BaseDataBase";

app.get("/showTables", async(req, res)=> {
    const base = new BaseDataBase()

    const show = await base.getConnection().raw(`SHOW TABLES`)
    res.send(show)
}) */

import { app } from "./app";
import Turma from "./endpoints/Turma";

const turma= new Turma()

app.post("/criar-turma", turma.criar)

