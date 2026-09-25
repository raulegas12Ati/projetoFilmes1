import express from "express"
import mysql2 from "mysql2"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const port = 3333



//C = OK
//R = OK
//U = OK
//D = OK

//READ
app.get("/all-movies", (request, response) => {
    console.log("Chegou na rota all-movies")
    const selectCommand = `
        SELECT * FROM filmes_RaulEgas
    `

    sql.query(selectCommand, (error, data) => {
        if(error){
            console.log(error)
            return
        }

        response.status(200).json(data)
    })
})

//CREATED
app.post("/createMovies", (request, response) => {
    console.log("Chegou em createMovies")
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
    console.log("Chegou em updateMovies")
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
    console.log("Chegou em deleteMovies")
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

