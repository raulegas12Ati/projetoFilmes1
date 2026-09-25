async function buscarFilmes() {
    console.log("Chegou em buscar filmes")
    // acessar a rota GET do backend, trazer os filmes e inserir os filmes no HTML
    const resposta = await fetch("http://localhost:3333/all-movies") // JSON
    const filmes = await resposta.json() // converter o JSON em objeto javascript
    const sectionFilmes = document.querySelector(".filmes")
    console.log("chegou aqui")

    filmes.forEach((filme) => {
        sectionFilmes.innerHTML += `    
                    <div>
                        <h2>${filme.titulo}</h2>
                        <p><strong>Gênero:</strong> ${filme.genero}</p>
                        <p><strong>Duração:</strong> ${filme.duracao} minutos</p>
                        <p><strong>Classificação indicativa:</strong> ${filme.classificacaoEtaria > 0 ? filme.classificacaoEtaria + ' anos' : 'Livre'}</p>
                    </div>
                `
    })
}

buscarFilmes()