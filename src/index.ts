import express from "express";

const app = express();

function isNumeric(str: string) {
  if (typeof str != "string") return false 
  return !isNaN(parseFloat(str)) 
}
app.get("/user/:id", (req, res) => {
  if (isNumeric(req.params.id)) {
    return res.send(`Ola, ${req.params.id}`) 
  }
  return res.status(400).send(`${req.params.id} é Id invalido`)
})



app.listen(3001);

// PARAM
// /usuarios/:id -> /usuarios/1 = Retornar o usuário de id 1

// QUERY
// /usuarios/:id -> /usuarios/1?ativos=true = Retornar o usuário de id 1 ativo