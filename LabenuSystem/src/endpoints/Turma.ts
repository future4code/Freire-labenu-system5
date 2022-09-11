import { Request, Response } from "express";

class Turma {

    async criar(req: Request, res: Response) {
        try {
            const {nome} = req.body
            console.log(nome)
            
        } catch (error:any) {
            res.status(500).send({message:error.message})
            
        }
    }
}
export default Turma