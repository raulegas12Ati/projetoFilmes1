const API_URL = "http://localhost:3333"

async function buscarFilmes() {
    console.log("Chegou em buscar filmes")

    const resposta = await fetch(`${API_URL}/all-movies`)
    const filmes = await resposta.json()

    const sectionFilmes = document.querySelector(".filmes")
    console.log("chegou aqui")

    filmes.forEach((filme) => {
        sectionFilmes.innerHTML += `
            <div>
                <h2>${filme.titulo}</h2>

                <p>
                    <strong>Gênero:</strong> ${filme.genero}
                </p>

                <p>
                    <strong>Duração:</strong> ${filme.duracao} minutos
                </p>

                <p>
                    <strong>Classificação indicativa:</strong>
                    ${
                        filme.classificacaoEtaria > 0
                            ? filme.classificacaoEtaria + " anos"
                            : "Livre"
                    }
                </p>

                <a href="updateMovie.html?id=${filme.id}">
                    Atualizar
                </a>

                <button onclick="deleteMovie(${filme.id})">
                    Excluir
                </button>
            </div>
        `
    })
}


async function deleteMovie(id) {
    console.log("Chegou em deleteMovie")

    const resposta = await fetch(
        `${API_URL}/deleteMovies/${id}`,
        {
            method: "DELETE"
        }
    )

    console.log("chegou aqui delete")
    window.location.href = "filmes.html"
}


buscarFilmes()