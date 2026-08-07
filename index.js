import express from "express"
import mysql2 from "mysql2"

const app = express()
app.use(express.json())

const port = 3333



//C = OK
//R = OK
//U = OK
//D = OK

//READ
app.get("/", (request, response) => {
    const selectCommand = `
        SELECT * FROM filmes_RaulEgas
    `

    sql.query(selectCommand, (error, data) => {
        if(error){
            console.log(error)
            return
        }

        console.log(data)
    })
})

//CREATED
app.post("/createdMovies", (request, response) => {
    const { genero, titulo, duracao, classificacaoEtaria } = request.body
    console.log(genero, titulo, duracao, classificacaoEtaria)

    const insertCommand = `
        INSERT INTO filmes_RaulEgas(titulo, genero, duracao, classificacaoEtaria)
        VALUES(?, ?, ?, ?)
    `

    sql.query(insertCommand, [titulo, genero, duracao, classificacaoEtaria], (error) => {
        if(error){
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Filme cadastrado com sucesso!"
        })
    })
})

//UPDATE
app.put("/updateMovies/:id", (request, response) => {
    const { id } = request.params
    const { genero, titulo, duracao, classificacaoEtaria } = request.body

    const updateCommand = `
        UPDATE filmes_RaulEgas
        SET titulo = ?, genero = ?, duracao = ?, classificacaoEtaria = ?
        WHERE id = ?
    `

    sql.query(updateCommand, [titulo, genero, duracao, classificacaoEtaria, id], (error) => {
        if(error){
            console.log(error)
            return
        }

        response.status(200).json({
            message: "Filme atualizado com sucesso!"
        })
        console.log("Filme atualizado com sucesso!")
    })
})

//DELETE
app.delete("/deleteMovies/:id", (request, response) => {
    const {id} = request.params

    const deleteCommand = `
        DELETE FROM filmes_RaulEgas
        WHERE id = ?
    `
   
   
    sql.query(deleteCommand, [id], (error) => {
        if(error){
            console.log(error)
            return
        }

        response.status(200).json({
            message: "Filme deletado com sucesso!"
        })
        console.log("Filme deletado com sucesso!")
    })
})

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    database: "alunos_filmes03TA",
    user: "alunos",
    password: "senhaAlunos"
})

