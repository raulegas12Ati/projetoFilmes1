const parametros = new URLSearchParams(window.location.search)
const API_URL = "https://projetofilmes1.onrender.com"

const id = parametros.get("id")

console.log("ID do filme:", id)


const formulario = document.getElementById("formularioAtualizacao")


formulario.addEventListener("submit", async (event) => {

    event.preventDefault()

    const titulo = document.getElementById("titulo").value
    const genero = document.getElementById("genero").value
    const duracao = document.getElementById("duracao").value
    const classificacaoEtaria = document.getElementById("classificacaoEtaria").value


    console.log("Dados que serão enviados:")
    console.log("ID:", id)
    console.log("Título:", titulo)
    console.log("Gênero:", genero)
    console.log("Duração:", duracao)
    console.log("Classificação:", classificacaoEtaria)


    const resposta = await fetch(
        `${API_URL}/updateMovies/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                titulo: titulo,
                genero: genero,
                duracao: duracao,
                classificacaoEtaria: classificacaoEtaria
            })
        }
    )


    if (!resposta.ok) {
        console.log("Erro ao atualizar filme:", resposta.status)
        return
    }


    console.log("Filme atualizado com sucesso!")

    window.location.href = "index.html"
})