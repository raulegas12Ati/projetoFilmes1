const formulario = document.getElementById("formularioCadastro")

formulario.addEventListener("submit", async (event) => {

    event.preventDefault()

    const titulo = document.getElementById("titulo").value
    const genero = document.getElementById("genero").value
    const duracao = Number(document.getElementById("duracao").value)
    const classificacaoEtaria = document.getElementById("classificacaoEtaria").value

    console.log("Dados do filme:")
    console.log("Título:", titulo)
    console.log("Gênero:", genero)
    console.log("Duração:", duracao)
    console.log("Classificação:", classificacaoEtaria)


    const resposta = await fetch(
        "http://localhost:3333/createMovies",
        {
            method: "POST",

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
        console.log("Erro ao cadastrar filme:", resposta.status)
        return
    }


    console.log("Filme cadastrado com sucesso!")

    window.location.href = "filmes.html"
})